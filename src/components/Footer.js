const Footer = ({page,setPage}) => {
    /**handle next 10 */
    const handleNextClick = () =>{
      setPage(page + 1);
    }
   /**handle previous 10 */
    const handlePrevClick = () =>{
      setPage(page - 1);
   
    }
      return(
          <div className='footer'>
          <button onClick={handlePrevClick}>Previous</button>
          <button onClick={handleNextClick}>Next</button> 
        </div>
      )
  }
  export default  Footer