const Footer = ({ page, setPage, itemsPerPage, totalNoOfItems }) => {

  const totalPages = Math.ceil(totalNoOfItems/itemsPerPage)

  /**handle next 10 */
  const handleNextClick = () => {
    page < totalPages && setPage(page + 1);
  }
  /**handle previous 10 */
  const handlePrevClick = () => {
    page > 1 && setPage(page - 1);
  }
  return (
    <div className='footer'>
      <button disabled={page===1} onClick={handlePrevClick}>Previous</button>
      <p>{`${page} of ${totalPages}`}</p>
      <button disabled={page===totalPages} onClick={handleNextClick}>Next</button>
    </div>
  )
}
export default Footer