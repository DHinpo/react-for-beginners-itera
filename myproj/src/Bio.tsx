type BioProp = {
    basic: string;
}
export const Bio: React.FC<BioProp> = (props) => (
    <h2 className="MyText">{props.basic}</h2>
);

