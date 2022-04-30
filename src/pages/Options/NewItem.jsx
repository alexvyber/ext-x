import React from 'react'
import { getStorageData, setStorageData } from '../../utils';

import { v4 as uuidv4 } from 'uuid';

export class NewItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { title: '', text: '' };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleInputChange(event) {
        const target = event.target;
        const value = target.value
        const name = target.name;

        this.setState({
            [name]: value
        });
    }



    async handleSubmit(event) {
        event.preventDefault();
        const { phrases } = await getStorageData('phrases')
        phrases.push({ id: uuidv4(), title: this.state.title, text: this.state.text })
        console.log(phrases)
        await setStorageData({ phrases: phrases })



    }


    render() {

        return (<section className='p-8 '>
            <div>
                <div className="">
                    <div className="max-w-3xl mx-auto">
                        <form onSubmit={this.handleSubmit}>
                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">

                                    <div className="col-span-3 sm:col-span-2">
                                        <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                            Title
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                value={this.state.title}
                                                onChange={this.handleInputChange}
                                                type="text"
                                                name="title"
                                                id="company-website"
                                                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-xs sm:text-sm border border-gray-300 p-1"
                                                placeholder="Title"
                                            />
                                        </div>
                                    </div>

                                    <div>

                                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                            Text
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                                onChange={this.handleInputChange}
                                                value={this.state.text}
                                                id="about"
                                                name="text"
                                                rows={3}
                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-xs p-1"
                                                placeholder="Text"
                                            ></textarea>
                                        </div>

                                    </div>


                                    <div>

                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-indigo-50 text-right sm:px-6">
                                    <input className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        type="submit" value="Submit" />

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </section>);
    }
}
