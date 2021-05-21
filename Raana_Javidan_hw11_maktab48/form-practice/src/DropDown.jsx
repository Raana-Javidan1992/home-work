import React from 'react';

class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            Arraystate:[],
			cities : [],
            selectArraystate:'',
			
		};
		this.changeArraystate = this.changeArraystate.bind(this);
		
	}
  
	componentDidMount() {
		this.setState({
			Arraystate : [
				{  name:'تهران' , cities: ['پاکدشت ', 'لواسان']},
				{  name:' زنجان' , cities: ['خدابنده', 'ابهر',]},
				{  name:' گلستان' , cities: ['  گنبد', 'گرگان']},
				{  name:'البرز' , cities: ['کرج','محمد شهر']},
				{  name:'مرکزی' , cities: ['شازند','اراک']},
				{  name:'لرستان' , cities: ['بروجرد','خرم آباد']},
				{  name:'قم' , cities: ['دستجرد','سلفچگان']},
				{  name:'گیلان' , cities: ['لاهیجان ','رشت']},
				{  name:'مازندران' , cities: ['بندر انزلی','ساری']},
				{  name:'تبریز' , cities: ['ارومیه','خوی']},
			]
		});
	}
  
	changeArraystate(event) {
		this.setState({selectedArraystate: event.target.value});
		this.setState({cities : this.state.Arraystate.find(cntry => cntry.name === event.target.value).cities});
	}


	render() {
		return (
			<div id="container">
	
			

				<div>
					
					<select className="select__degree" placeholder="استان محل تولد" value={this.state.selectedArraystate} onChange={this.changeArraystate}>
						<option>نام استان</option>
						{this.state.Arraystate.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>
				
				<div>
                    {/* <label className="selectTitle">محل تولد</label> */}
					<select className="select__degree" placeholder="شهر">
                        <option>انتخاب شهر</option>
                        {this.state.cities.map((e, key) => {
							return <option key={key}>{e}</option>;
						})}
					</select>
				</div>
			</div>
		)
	}
}

export default Dropdown;