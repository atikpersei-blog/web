import { visit } from 'unist-util-visit';
import { h } from 'hastscript';

export default function rehypeFilenamePlugin() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === 'pre' && node.children[0]?.tagName === 'code' && node.children[0].data && node.children[0].data.meta) {
        const meta = node.children[0].data.meta
        const filenameMatch = meta.match(/filename="([^"]+)"/)

        if (filenameMatch) {
          const filename = filenameMatch[1];
          const filenameDiv = h('div', { className: 'px-3 py-2 text-xs border-t border-l border-r border-gray-200 rounded-t-md' }, filename);
          const wrapperDiv = h('div', { className: 'code-block' }, [ filenameDiv, node ])
          parent.children[index] = wrapperDiv
        }
      }
    })
  }
}
