export default function Button ({btnClass, content}){
    return
    (
        <button className={`${btnClass}`}>
            {content}
        </button>
    )
}