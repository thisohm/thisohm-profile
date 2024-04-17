export default function InputError({ message}) {
    return message ? (
        <p className="text-xs" style={{color:"red"}}>
            {message}
        </p>
    ) : null;
}
