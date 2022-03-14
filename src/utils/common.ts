export function trimExpression(expresssion: string): string {
  return expresssion.replace(/^0+/, "")
}

export function trimNumber(num: number): number {
  return parseInt(num.toString(), 10);
}

export function concatNumbers(firstNum: number, secondNum: number): number {
  return trimNumber(Number("" + firstNum + secondNum));
}

export function calculateExpression(expression: string): number {
  let expressionElementArray = expression.split('+');
  expressionElementArray = expression.split('-');
  expressionElementArray = expression.split('*');
  expressionElementArray = expression.split('/');
  expressionElementArray.map((element, index) => {

  })
  return 0;
}
