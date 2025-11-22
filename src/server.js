import { createServer } from "miragejs"

export default function () {
    createServer({
        // Definindo as rotas da nossa API simulada
        routes() { 
            // this.get() é o método  que nos permite simular as requisições GET
            this.get("/api/reminders", () => ({
                reminders: [
                    {id: 1, text: "Walk the dog"},
                    {id: 2, text: "Buy groceries"},
                    {id: 3, text: "Take out the trash"},
                    {id: 4, text: "Work out"},
                ],
            }))
            let newId = 5
            this.post("/api/reminders", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                attrs.id = newId++

                return { reminder: attrs }
            })
        }
    })
}
