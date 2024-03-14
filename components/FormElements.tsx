export type  ElementType = "Text Field";

export type FormElement = {
    type:ElementType;

    designerComponent:React.FC;
    formComponent:React.FC;
    propertiesComponent:React.FC;
};


type FormElementsType = {
    [key in ElementType]:FormElement;
};
export const FormElements = {
    TextField:
};
