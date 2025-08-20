import BtnBlueComponent from "../components/general/BtnBlueComponent";

export default function SuppliesList() {

    return (
        <div className="flex min-h-screen justify-center items-center">

            <div className="w-1/5">
                <BtnBlueComponent
                    onClick={() => console.log("hola")}
                    text="Abrir modal"
                />
            </div>

        </div>
    );
}