const CopyRight = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className='uniq-ag-copyright'>
      <p>© {currentYear} Uniqaya Lifestyle | All Rights Reserved</p>
    </div>
  )
}

export default CopyRight
