import * as React from 'react';
import axios from 'axios';
import { serverUrl } from '../../helpers/Constants';

interface IFormContainerProps {
    updateReloadState: () => void
}
const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
  const {updateReloadState} = props; 
  const [fullUrl, setFullUrl] = React.useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${serverUrl}/shortUrl`,{
        fullUrl: fullUrl
      });
      setFullUrl("");
      updateReloadState();
    } catch (error) {
      console.log(error);
    }
  }


  return(
    <div className="container  p-2">
        <div className="bg-banner my-8 rounded-xl bg-cover bg-center">
          <div className="  h-full rounded-xl p-20 backdrop-brightness-50 ">
            <h2 className="text-red-600 text-4xl text-center pb-4">URL Shortner</h2>
            <p className="text-red-600 text-center pb-2 text-xl font-extralight">
              Paste your link to shorten URL
            </p>
            <p className="text-red-600 text-center pb-4 text-sm font-thin ">
              Free tool to shortnet the url or reduce the length of url
            </p>
        
            <form onSubmit={handleSubmit}>
              <div 
                className="flex flex-col space-y-4"
              >
                <input
                  type="text"
                  placeholder="Add your link"
                  required
                  value={fullUrl}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullUrl(e.target.value)}
                  className=" p-4 text-sm text-red-900 border border-orange-300 rounded-lg bg-white focus:ring-green-500 focus:border-green-500"
                />
                <button
                  type="submit"
                  className=" p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Shorten URL
                </button>
            </div>
          </form>
          
          
          </div>
        </div>
    </div> 
  )
};

export default FormContainer;
