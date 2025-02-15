/* eslint-disable react/prop-types */
function ListAboutPruduct({ brand, category, gender, heavey }) {
  return (
    <ul className="grid">
      <li>
        <span className="text-gray-500">Brand:</span> {brand}
      </li>
      <li>
        <span className="text-gray-500">Category:</span> {category}
      </li>
      <li>
        <span className="text-gray-500">Gender:</span> {gender}
      </li>
      <li>
        <span className="text-gray-500">Heavy:</span> {heavey}
      </li>
    </ul>
  );
}

export default ListAboutPruduct;
