type AvatarProp = {
    basic: string;
}
export const Avatar: React.FC<AvatarProp> = (props) => (
    <h3>{props.basic}</h3>
);

