import EventCard from "../components/cards/EventCard";

export default function LandingPage (){

    let numbers: string = [
        1,2,3,4,5,6,7,8
    ]

    return(
        <div className="flex min-h-screen justify-center items-center">
            
            <h2>Prueba de typeScript</h2>
            <div className="grid grid-4">
                <EventCard value={number}/>
            </div>
        </div>
    );
}