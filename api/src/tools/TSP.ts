import { Cliente } from 'src/clientes/entities/cliente';

interface Cidade {
  x: number;
  y: number;
  id: number;
}

function calcularDistancia(cidade1: Cidade, cidade2: Cidade): number {
  const xDist = cidade1.x - cidade2.x;
  const yDist = cidade1.y - cidade2.y;
  return Math.sqrt(xDist * xDist + yDist * yDist);
}

function calcularDistanciaTotal(rota: number[], cidades: Cidade[]): number {
  let distanciaTotal = 0;
  for (let i = 0; i < rota.length - 1; i++) {
    const cidadeAtual = cidades[rota[i]];
    const proximaCidade = cidades[rota[i + 1]];
    distanciaTotal += calcularDistancia(cidadeAtual, proximaCidade);
  }
  // Adiciona a distância da última cidade de volta à primeira
  distanciaTotal += calcularDistancia(
    cidades[rota[rota.length - 1]],
    cidades[rota[0]],
  );
  return distanciaTotal;
}

function encontrarMenorRota(cidades: Cidade[]): number[] {
  const numCidades = cidades.length;
  let menorDistancia = Infinity;
  let melhorRota: number[] = [];

  const indices: number[] = [];
  for (let i = 0; i < numCidades; i++) {
    indices.push(i);
  }

  const permutacoes = permute(indices);

  for (let i = 0; i < permutacoes.length; i++) {
    const distanciaAtual = calcularDistanciaTotal(permutacoes[i], cidades);
    if (distanciaAtual < menorDistancia) {
      menorDistancia = distanciaAtual;
      melhorRota = permutacoes[i];
    }
  }

  return melhorRota;
}

// Função para calcular todas as permutações de um array
function permute(arr: number[]): number[][] {
  const result: number[][] = [];

  function permuteHelper(arr: number[], index: number): void {
    if (index === arr.length - 1) {
      result.push([...arr]);
      return;
    }
    for (let i = index; i < arr.length; i++) {
      [arr[index], arr[i]] = [arr[i], arr[index]];
      permuteHelper(arr, index + 1);
      [arr[index], arr[i]] = [arr[i], arr[index]];
    }
  }

  permuteHelper(arr, 0);
  return result;
}

export function ordenarCoordenadas(coordenadas: Cliente[]): Cliente[] {
  const cidades: Cidade[] = coordenadas.map((item) => {
    return { x: item.coordenada_x, y: item.coordenada_y, id: item.id };
  });
  const melhorRota = encontrarMenorRota(cidades);
  return melhorRota.map((i) => coordenadas[i]);
}
