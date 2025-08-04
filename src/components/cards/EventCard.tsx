type eventProps = {
    value: number,
}


export default function EventCard ({value}: eventProps){
    
    return(
        <div className="flex shadow-md rounded">
            <h1>{value}</h1>
        </div>
    );
}