import * as Yup from "yup";

export const SignupSchemaEducationForm = Yup.object().shape({
    schoolName: Yup.string()
        .required('Please, input your school name.'),
    titleOfStudy: Yup.string()
        .required('Please, input your title of study.'),
    dateOfStudyFrom: Yup.date()
        .required('Please, input when you start study.')
        .nullable(),
    dateOfStudyTo: Yup.date()
        .required('Please, input when you end study.')
        .nullable(),
});

export const SignupSchemaGeneralForm= Yup.object().shape({
    firstName: Yup.string()
        .required('Please, input your first name.'),
    lastName: Yup.string()
        .required('Please, input your last name.'),
    email: Yup.string().email('Invalid email').required('Please, input your email.'),
    dateOfBirth: Yup.date()
        .required('Please, input your date of birth.')
        .nullable(),
    gender: Yup.string().required('Please, input your gender type.')
});

export const SignupSchemaPracticalExperienceForm = Yup.object().shape({
    companyName: Yup.string()
        .required('Please, input your company name.'),
    positionTitle: Yup.string()
        .required('Please, input your position title.'),
    dateFrom: Yup.object()
        .required('Please, input when you start work.')
        .nullable(),
    dateTo: Yup.object()
        .required('Please, input when you end work.')
        .nullable(),
});