type HeaderProp = {
    basic: string;
}
export const Header: React.FC<HeaderProp> = (props) => (
    <h1>{props.basic}</h1>
);
