import { createServer, Model } from "miragejs"

export default function () {
    createServer({
        models: {
            reminder: Model,
        },
        // hook para inicializar o mirage com alguns dados iniciais
        seeds(server) {
            server.create("reminder", { text: "Walk the dog"})
            server.create("reminder", { text: "Take out the trash"})
            server.create("reminder", { text: "Work out"})
        },
        // Definindo as rotas da nossa API simulada
        routes() { 
            // this.get() é o método  que nos permite simular as requisições GET
            this.get("/api/reminders", (schema) => {
                return schema.reminders.all()
            })
            this.post("/api/reminders", (schema, request) => {
                const attrs = JSON.parse(request.requestBody)
                return schema.reminders.create(attrs)
            })
            this.delete("/api/reminders/:id", (schema, request) => {
                const id = request.params.id
                return schema.reminders.find(id).delete()
            })
        }
    })
}