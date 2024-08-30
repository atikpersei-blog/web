import { visit } from 'unist-util-visit';

export default function rehypeTablePlugin() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'table') {
        // find table element
        const thead = node.children.find(child => child.tagName === 'thead');
        const tbody = node.children.find(child => child.tagName === 'tbody');

        // find thead tr
        const headerRow = thead.children[1];

        // check thead tr
        if (!headerRow || !headerRow.children) return;

        // get metadata cell
        const metaCell = headerRow.children[headerRow.children.length - 2];

        // Regex width, align
        const widthMatch = metaCell.children[0].value.match(/width=\[([^\]]+)\]/);
        const alignMatch = metaCell.children[0].value.match(/align=\[([^\]]+)\]/);

        // check width, align
        if (!widthMatch || !alignMatch) return;

        const widths = widthMatch[1].split(',').map(s => parseFloat(s.trim()));
        const aligns = alignMatch[1].split(',').map(s => s.trim().replace(/"/g, ''));

        function applyStylesToRow(row, isHeader) {
          if (!row.children) return;
          const cellTag = isHeader ? 'th' : 'td';
          const cells = Array.from(row.children).filter(child => child.tagName === cellTag);

          // Hide metadata cell
          const metaCell = cells[cells.length - 1];
          metaCell.properties.className = (metaCell.properties.className || '') + ' hidden';

          cells.forEach((cell, index) => {
            if (widths[index]) {
              cell.properties.className = (cell.properties.className || '') + ` w-${widths[index]} min-w-${widths[index]} max-w-${widths[index]} break-all`;
            }

            if (aligns[index] || aligns[index] == '') {
              switch (aligns[index]) {
                case '':
                case 'left':
                  cell.properties.className = (cell.properties.className || '') + ` text-left`;
                  break;
                case 'center':
                  cell.properties.className = (cell.properties.className || '') + ` text-center`;
                  break;
                case 'right':
                  cell.properties.className = (cell.properties.className || '') + ` text-right`;
                  break;
              }
            }

            // Add class if specific condition is met
            if (cell.children[0]?.value == '> ' && cell.children[1]?.properties.href) {
              node.properties.className = (node.properties.className || '') + ' text-base	border-spacing-4 border-separate';
              cell.properties.className = (cell.properties.className || '') + ' text-base	h-16 border border-gray-200 rounded-lg hover:border-gray-400 duration-200';
              cell.children[0].value = cell.children[0].value.replace('> ', '')
              cell.children[1].properties.className = (cell.children[1].properties.className || '') + ' w-full h-full flex items-center justify-center font-normal	text-gray-600';
            }
          });
        }

        thead.children.forEach(row => applyStylesToRow(row, true));
        tbody.children.forEach(row => applyStylesToRow(row, false));
      }
    });
  };
}
