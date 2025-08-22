import type { suppliesValues } from "../../interfaces/formtype"

export default function SuppliesTable() {

    const supplies: suppliesValues[] = [
        {
            id: 1,
            name: "Paracetamol",
            category: "Analgésico",
            type: "Medicamento",
            filing: "Tableta",
            concentration: "500mg",
            form: "Sólido"
        },
        {
            id: 2,
            name: "Amoxicilina",
            category: "Antibiótico",
            type: "Medicamento",
            filing: "Cápsula",
            concentration: "250mg",
            form: "Sólido"
        },
        {
            id: 3,
            name: "Gasas estériles",
            category: "Curación",
            type: "Material",
            filing: "Paquete",
            concentration: "10x10cm",
            form: "Tela"
        },
        {
            id: 4,
            name: "Alcohol médico",
            category: "Antiséptico",
            type: "Líquido",
            filing: "Frasco",
            concentration: "70%",
            form: "Líquido"
        }
    ];

    return (
        <div className="flex">

            <table className="border-1 border-zinc-200">
                <thead>
                    <tr className="bg-medium-gray">
                        <th className="">ID único</th>
                        <th>Nombre</th>
                        <th>Categoria</th>
                        <th>Tipo</th>
                        <th>Presentación</th>
                        <th>Concentración</th>
                        <th>form</th>
                    </tr>
                </thead>
                <tbody>
                    {supplies.map((supply) => (
                        <tr key={supply.id} className="border-b-1 border-zinc-200">
                            <td className="text-dark-blue">{supply.id}</td>
                            <td>{supply.name}</td>
                            <td>{supply.category}</td>
                            <td>{supply.type}</td>
                            <td>{supply.filing}</td>
                            <td>{supply.concentration}</td>
                            <td>{supply.form}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}