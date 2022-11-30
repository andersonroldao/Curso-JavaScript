// Parâmetro rest...
function escrevaEndereco(rua, cidade, pais, ...complementos) {
    console.log(`${rua},
${cidade},
${pais},
${complementos}`);
}

escrevaEndereco('rua josé de alencar', 'Rio Grande', 'Brasil', 'casa 2', ' fundos', ' CEP: 90028220');