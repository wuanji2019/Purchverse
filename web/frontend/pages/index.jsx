import { Loading } from "@shopify/app-bridge-react";
import { useAppBridge } from "@shopify/app-bridge-react";
import {
  Card,
  Page,
} from "@shopify/polaris";
import { background } from "../assets";

import { useAuthenticatedFetch } from "../hooks";
import { useEffect, useState } from "react";
import './index.less';

export default function HomePage() { 
 
  const fetch = useAuthenticatedFetch();
  const defaultUrl = 'https://www.purchverse.com/shopify'
  const [url, setUrl] = useState(defaultUrl)
  useEffect(async () => {
    console.log('useEffect')
    const response = await fetch("/api/auth/session");
    const { data } = await  response.json()
    if (data?.session) {
      const session = data?.session
      setUrl(defaultUrl + `?shop=${session.shop}&accessToken=${session.accessToken}`)
    } 
  }, [])
  
  const app = useAppBridge()
  if (app) {
    app.getState().then((state) => console.log('state', state));
  }
  const isLoading = false; 
 
  const loadingMarkup = isLoading ? (
    <Card sectioned>
      <Loading />
    </Card>
  ) : null;
 
 
  return (
    <Page>
      <div className="publicize">
      <Card>
        <div>
          <div className="publicize-bg">
            <img src={background} alt="purchverse" />
          </div>
          <div className="publicize-info">
            <h1>Purchverse</h1>
            <p>
              <span>made in china</span>
              <span>dropshipping</span>
              <span>brand custom</span>
              </p>
            <div className="login">
              <a 
                id="loginBtn" 
                role="button" 
                tabindex="0" 
                target="_blank" 
                className='embed-app-page-card-btn' 
                href={url}>
                Log in to Purchverse
              </a>
            </div>
          </div>
        </div>
      </Card>
      </div>
    </Page>
  );
}