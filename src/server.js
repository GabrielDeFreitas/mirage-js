import { belongsTo, createServer, Factory, hasMany, Model, RestSerializer, trait } from "miragejs"

export default function () {
    return createServer({
        environment: "test",

        factories: {
            list: Factory.extend({
                name(i) {
                    return `List ${i}`
                },
                winthReminders: trait({
                    afterCreate(list, server) {
                        server.createList('reminder', 5, { list })
                    }
                })
            }),
            reminder: Factory.extend({
                text(i) {
                    return `Reminder ${i}`
                }
            })
        },
        serializers: {
            reminder: RestSerializer.extend({
                include: ["list"],
                embed: true,
            })
        },
        models: {
            list: Model.extend({
            //uma lista pode ter vários lembretes
            reminders: hasMany(),
        }),
        reminder: Model.extend({
            list: belongsTo(),
        }),
        },
        // hook para inicializar o mirage com alguns dados iniciais
        seeds(server) {
            server.create("reminder", { text: "Walk the dog" });
            server.create("reminder", { text: "Take out the trash" });
            server.create("reminder", { text: "Work out" });

            server.create("list", {
                name: "Home",
                reminders: [server.create("reminder", { text: "Do taxes" })],
            });
            server.create("list", {
                name: "Work",
                reminders: [server.create("reminder", { text: "Visit bank" })],
            });
        },
        // Definindo as rotas da nossa API simulada
        routes() { 
            // this.get() é o método  que nos permite simular as requisições GET
            this.get("/api/reminders", (schema) => {
                return schema.reminders.all()
            })
            this.get("/api/lists/:id/reminders", (schema, request) => {
                const listId = request.params.id
                const list = schema.lists.find(listId)
                return list.reminders
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