// Data Table component 
import Button from '../common/Button';

const DataTable = ({ columns, data, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-coffee-50">
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {col.header}
              </th>
            ))}
            <th className="px-6 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.length > 0 ? data.map((item) => (
            <tr key={item._id} className="hover:bg-gray-50">
              {columns.map((col, idx) => (
                <td key={idx} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {col.render ? col.render(item) : item[col.field]}
                </td>
              ))}
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                <Button variant="outline" onClick={() => onEdit(item)} className="px-2 py-1 text-xs">Edit</Button>
                <Button variant="danger" onClick={() => onDelete(item._id)} className="px-2 py-1 text-xs">Delete</Button>
              </td>
            </tr>
          )) : (
            <tr><td colSpan={columns.length + 1} className="px-6 py-4 text-center text-gray-500">No data found</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;