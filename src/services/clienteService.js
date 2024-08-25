export class ClienteService {
    constructor(clienteModel) {
        this.clienteModel = clienteModel;
    }

    criarCliente = async (cliente) => {
        return await this.clienteModel.criarCliente(cliente);
    };
    
    obterClientes = async () => {
        return await this.clienteModel.obterClientes();
    };
    
    obterClientePorId = async (id) => {
        return await this.clienteModel.obterClientePorId(id);
    };
    
    atualizarCliente = async (id, cliente) => {
        await this.clienteModel.atualizarCliente(id, cliente);
    };
    
    deletarCliente = async (id) => {
        await this.clienteModel.deletarCliente(id);
    }

};
