const prompt = require("prompt-sync")();

const { criarArmas } = require("./Armas/criarArmas")
const { cautelarArmas } = require("./Armas/cautelarArmas");
const { devolverArmas } = require("./Armas/devolverArmas")
const { excluirArmas } = require("./Armas/excluirArmas")
const { listarArmas } = require("./Armas/listarArmas")



criarArmas("PT","Glock","G22",".40")
criarArmas("Fuzil","Taurus","T4",".556")
criarArmas("SMT","Taurus",".40")

cautelarArmas()
devolverArmas()
listarArmas()
excluirArmas()
