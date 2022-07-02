/* eslint-disable no-useless-escape */
import React, { useEffect } from 'react';
import ReCaptchaV2 from 'react-google-recaptcha';
import { Formik, Form, useField, useFormikContext } from 'formik';
import * as Yup from 'yup';
import { SmallText, SmallLink } from '../global/textStyles';
import {
  FormContainer,
  Label,
  Input,
  TextArea,
  Error,
  Select,
  SubmitButton,
  TermsContainer,
  Checkbox,
  CheckboxError,
  ReCaptchaContainer,
} from './styledStartupForm';
import { REGIONS, SEGMENTS } from '../../utils/configData';
import FileUploader from '../file-uploader/FileUploader';
import api from '../../utils/api';

const StartupForm = ({ investor, handleSuccess }) => {
  // Defines custom URL validation for Yup verification
  const urlValidation =
    /(http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?/i;
  const emailValidation =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // const SUPPORTED_LOGO_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];
  // const SUPPORTED_PDF_FORMATS = ['application/pdf'];
  // const FILE_SIZE = 10000;

  // Checks to see if reCAPTCHA value is present and allows validation through Yup
  // Purpose: when reCAPTCHA expires after 60 seconds, the submit button will be disabled
  const ValidateRecaptcha = () => {
    const { values, setFieldValue } = useFormikContext();

    useEffect(() => {
      if (values.recaptcha === null) {
        setFieldValue('recaptcha', '');
      }
    }, [values.recaptcha]);
    return null;
  };

  const requestedFormFields = investor.formFields;

  // Defines Formik initialValues allowing for optional fields
  const initialData = {
    investorId: investor.investorId,
    logo: '',
    name: '',
    description: '',
    url: '',
    pitchUrl: '',
    presentationDeck: '',
    founder: '',
    founderEmail: '',
    founderFacebook: '',
    founderLinkedIn: '',
    ...(requestedFormFields.includes('revenue') && { revenue: '', isRevenue: true }),
    ...(requestedFormFields.includes('segment') && { segment: '', isSegment: true }),
    ...(requestedFormFields.includes('location') && { location: '', isLocation: true }),
    ...(requestedFormFields.includes('growth') && { growth: '', isGrowth: true }),
    acceptedTerms: false,
    recaptcha: '',
  };

  // Standard 1-line text input
  const CustomTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <Label htmlFor={props.id || props.name}>{label}</Label>
        <Input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
      </>
    );
  };

  // Multi-line text input
  const CustomTextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <Label htmlFor={props.id || props.name}>{label}</Label>
        <TextArea className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
      </>
    );
  };

  // Agree to terms checkbox
  const CustomCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField(props, 'checkbox');
    return (
      <>
        <TermsContainer htmlFor={props.id || props.name}>
          <Checkbox {...field} {...props} />
          {children}
        </TermsContainer>
        {meta.touched && meta.error ? <CheckboxError>{meta.error}</CheckboxError> : null}
      </>
    );
  };

  // Drop-down fields
  const CustomSelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <Label htmlFor={props.id || props.name}>{label}</Label>
        <Select {...field} {...props} />
        {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
      </>
    );
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialData}
      validationSchema={Yup.object({
        logo: Yup.mixed().required('This field is required'),
        name: Yup.string()
          .min(2, 'Must be at least 2 characters')
          .max(30, 'Must be 30 characters or less')
          .required('This field is required'),
        description: Yup.string()
          .min(3, 'Must be at least 3 characters')
          .max(350, 'Must be 350 characters or less')
          .required('This field is required'),
        url: Yup.string()
          .matches(urlValidation, 'Please enter a valid URL')
          .required('This field is required'),
        pitchUrl: Yup.string()
          .matches(urlValidation, 'Please enter a valid URL')
          .required('This field is required'),
        presentationDeck: Yup.mixed().required('This field is required'),
        founder: Yup.string()
          .min(2, 'Must be at least 2 characters')
          .max(30, 'Must be 30 characters or less')
          .required('This field is required'),
        founderEmail: Yup.string()
          .matches(emailValidation, 'Please enter a valid email')
          .required('This field is required'),
        founderFacebook: Yup.string().matches(urlValidation, 'Please enter a valid URL'),
        founderLinkedIn: Yup.string().matches(urlValidation, 'Please enter a valid URL'),
        isRevenue: Yup.boolean(),
        revenue: Yup.number()
          .notRequired()
          .when('isRevenue', {
            is: true,
            then: Yup.number()
              .required('This field is required')
              .typeError('You must enter a number')
              .integer('Please enter a whole number')
              .min(10, 'Revenue must be between 10 and 200')
              .max(200, 'Revenue must be between 10 and 200'),
          }),
        isSegment: Yup.boolean(),
        segment: Yup.string()
          .notRequired()
          .when('isSegment', {
            is: true,
            then: Yup.string()
              .required('This field is required')
              .oneOf(SEGMENTS.map((object) => object.value)),
          }),
        isLocation: Yup.boolean(),
        location: Yup.string()
          .notRequired()
          .when('isLocation', {
            is: true,
            then: Yup.string()
              .required('This field is required')
              .oneOf(REGIONS.map((object) => object.value)),
          }),
        isGrowth: Yup.boolean(),
        growth: Yup.number()
          .notRequired()
          .when('isGrowth', {
            is: true,
            then: Yup.number()
              .required('This field is required')
              .typeError('You must enter a number')
              .integer('Please enter a whole number')
              .min(0, 'Please enter a number 0 or higher'),
          }),
        recaptcha: Yup.string().required('Please verify that you are not a robot'),
        acceptedTerms: Yup.boolean()
          .oneOf([true], 'This field is required')
          .required('This field is required'),
      })}
      onSubmit={(startupData, { setSubmitting, resetForm }) => {
        api
          .saveStartup(startupData)
          .then(() => {
            handleSuccess(true);
            resetForm();
            setSubmitting(false);
          })
          .catch((error) => {
            alert('Something went wrong, please try again.');
            console.log(error);
          });
      }}
    >
      {(props) => {
        return (
          <FormContainer>
            <Form noValidate>
              <FileUploader
                label="Startup Logo*"
                labelType="logoLabel"
                fieldName="logo"
                uploadType="image"
                message="SELECT PHOTO"
                setFieldValue={props.setFieldValue}
              />
              <CustomTextInput label="Startup Name*" name="name" type="text" />
              <CustomTextArea label="Startup Description*" name="description" rows="5" />
              <CustomTextInput label="Website Link*" name="url" type="text" />
              <CustomTextInput label="YouTube Video Pitch Link*" name="pitchUrl" type="url" />
              <FileUploader
                label="PDF Presentation Upload*"
                fieldName="presentationDeck"
                uploadType="pdf"
                message="Select File"
                setFieldValue={props.setFieldValue}
              />
              <CustomTextInput label="Founder Name*" name="founder" type="text" />
              <CustomTextInput label="Founder Email*" name="founderEmail" type="email" />
              <CustomTextInput label="Founder Facebook" name="founderFacebook" type="text" />
              <CustomTextInput label="Founder LinkedIn" name="founderLinkedIn" type="text" />
              {/* begin conditional fields */}
              {requestedFormFields.includes('revenue') && (
                <CustomTextInput
                  label="Annual Revenue (USD in Thousands) *"
                  name="revenue"
                  type="text"
                />
              )}
              {requestedFormFields.includes('segment') && (
                <CustomSelect label="Industry *" name="segment">
                  <option value="">Select</option>
                  {SEGMENTS.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.textContent}
                    </option>
                  ))}
                </CustomSelect>
              )}
              {requestedFormFields.includes('location') && (
                <CustomSelect label="Location *" name="location">
                  <option value="">Select</option>
                  {REGIONS.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.textContent}
                    </option>
                  ))}
                </CustomSelect>
              )}
              {requestedFormFields.includes('growth') && (
                <CustomTextInput
                  label="Growth Speed (New users per Month) *"
                  name="growth"
                  type="text"
                />
              )}
              {/* end conditional fields */}
              <ReCaptchaContainer>
                <ReCaptchaV2
                  sitekey={`${process.env.REACT_APP_RECAPTCHA_KEY}`}
                  onChange={(value) => {
                    props.setFieldValue('recaptcha', value);
                  }}
                />
                <ValidateRecaptcha />
              </ReCaptchaContainer>
              <SubmitButton type="submit" disabled={!(props.dirty && props.isValid)}>
                {props.isSubmitting ? 'Sending...' : 'Send the form'}
              </SubmitButton>
              <CustomCheckbox name="acceptedTerms" type="checkbox">
                <SmallText>
                  I agree to the{' '}
                  <SmallLink
                    href="https://dotcot-test.s3.eu-west-1.amazonaws.com/MIT+License.pdf"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    terms of use
                  </SmallLink>
                </SmallText>
              </CustomCheckbox>
            </Form>
          </FormContainer>
        );
      }}
    </Formik>
  );
};

export default StartupForm;
