type ResumeProp = {
    basic: string;
}
export const Resume: React.FC<ResumeProp> = (props) => (
    <h2 className="MyText">{props.basic}</h2>
);
