import { NextResponse } from "next/server";

//extraer parametros
//consultar base de datos
//comunicarse con otros backends
export async function GET() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()


    return NextResponse.json(data)
}

export async function POST(request) {
    const data = await request.json() //equivalente al request.body
    return NextResponse.json({
        message: 'creando datos!'
    })
}

export function PUT() {

    return NextResponse.json({
        message: 'actualizando datos!'
    })
}

export function DELETE() {

    return NextResponse.json({
        message: 'eliminando datos!'
    })
}
