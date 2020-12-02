// EducationInfo
import {FormInstance} from "antd/lib/form";
import {Control, DeepMap, FieldError} from "react-hook-form";

export type valuesTypeForEducationInfo = {
    schoolName: string
    titleOfStudy: string
    dateOfStudyFrom: Date | null
    dateOfStudyTo: Date | null
}

export type valuesTypeForEducationInfoReadOnly = {
    educationInfo: valuesTypeForEducationInfo
    edit: () => void
}

export type valuesTypeForEducationInfoEdit = {
    submit: (values: valuesTypeForEducationInfo, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => void
    educationInfo: valuesTypeForEducationInfo
}

// GeneralInfo
export type valuesTypeForGeneralInfo = {
    firstName: string
    lastName: string
    email: string
    dateOfBirth: Date | null
    gender: GenderType
}

type GenderType = 'Male' | 'Female';

export type valuesTypeForGeneralInfoReadOnly = {
    generalInfo: valuesTypeForGeneralInfo
    edit: () => void
}

export type valuesTypeForGeneralInfoEdit = {
    submit: (values: valuesTypeForGeneralInfo, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => void
    generalInfo: valuesTypeForGeneralInfo
}

// Practical experience
export type companyInfo = {
    companyName: string
    positionTitle: string
    mainTasks: string
    dateFrom: Date | null,
    dateTo: Date | null,
    isSave: boolean
}

export type CollectionCreateFormProps = {
    visible: boolean;
    onCreate: (values: companyInfo) => void;
    onCancel: () => void;
    initialValues: companyInfo
    form: FormInstance
    register: () => void
    errors: DeepMap<companyInfo, FieldError>
    control: Control<companyInfo>
}
