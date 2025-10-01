/**
 * 📝 Сумма всех значений в дереве
 *
 * Напишите функцию getTreeVal(obj), которая принимает объект, представляющий дерево, 
 * и возвращает сумму всех значений в поле value. Условия:
    Объект имеет следующую структуру:
    - value: число
    - children: массив дочерних узлов, каждый из которых имеет такую же структуру
    - Если дочерние узлы отсутствуют, узел содержит только поле value.
 *
 * @param {TreeNode} obj
 * @returns {number}
 *
 * @example
    Input 1: {
            value: 10,
            children: []
            }
    Output 1: 10

    Input 2: {
            value: 0,
            children: [
                {
                value: 0,
                children: []
                }
            ]
            }
    Output 2: 0

    Input 3: {
            value: -5,
            children: [
                {
                value: -10,
                children: [
                    { value: -15 }
                ]
                }
            ]
            }
    Output 3: -30
 */

export function getTreeVal(obj) {
  let sum = 0;

  const hasChildren = (node) => {
    return (
      typeof node === "object" && node.children && node.children.length > 0
    );
  };

  const traversal = (node) => {
    if (hasChildren(node)) {
      for (const item of node.children) {
        traversal(item);
      }
    }
    sum += node.value;
  };

  traversal(obj);

  return sum;
}

export function getTreeValSecondVersion(obj) {
  let sum = obj.value || 0;

  if (Array.isArray(obj.children)) {
    for (let child of obj.children) {
      sum += getTreeValSecondVersion(child);
    }
  }

  return sum;
}
