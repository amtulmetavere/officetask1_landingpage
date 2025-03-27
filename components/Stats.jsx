import React from 'react'

const Stats = () => {
  return (
    <section className="stats-after-banner py-0">
	<div className="container-fluid">
			<div className="stats-block-row row flex justify-content-between">
					<div className="col-md-3 col-sm-3 col-xs-6 d-flex">
				<div className="stats-block">
					<span className="stats-title">20</span>
					<p>Law Practice Areas Serving</p>
				</div>
			</div>
					<div className="col-md-3 col-sm-3 col-xs-6 d-flex">
				<div className="stats-block">
					<span className="stats-title">600+</span>
					<p>Happy Clients</p>
				</div>
			</div>
					<div className="col-md-3 col-sm-3 col-xs-6 d-flex">
				<div className="stats-block">
					<span className="stats-title">50</span>
					<p>States Serving</p>
				</div>
			</div>
					<div className="col-md-3 col-sm-3 col-xs-6 d-flex">
				<div className="stats-block">
					<span className="stats-title">200+</span>
					<p>Employees</p>
				</div>
			</div>
				</div>
		</div> 
</section>
  )
}

export default Stats
