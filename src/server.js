import { createServer, Model } from "miragejs"

export default function () {
    createServer({
        models: {
            reminder: Model,
        },
        // Definindo as rotas da nossa API simulada
        routes() { 
            // this.get() é o método  que nos permite simular as requisições GET
            this.get("/api/reminders", (schema) => {
                return schema.reminders.all()
            })
            this.post("/api/reminders", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                return schema.reminders.create(attrs)
            })
        }
    })
}