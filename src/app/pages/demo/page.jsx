const Page = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">1 of 2</div>
        <div className="col">2 of 2</div>
      </div>
      <div className="row">
        <div className="col">1 of 3</div>
        <div className="col">2 of 3</div>
        <div className="d-sm-none d-md-block">11111111111111111</div>
        <div className="col">3 of 3</div>
      </div>
    </div>
  )
}

export default Page
