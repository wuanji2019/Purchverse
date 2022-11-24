import { Loading } from "@shopify/app-bridge-react";
import {
  Card,
  Layout,
  Page,
} from "@shopify/polaris";
import './index.less';

export default function HomePage() { 
 
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
          <img src="https://assets.am-static.com/accounts/landing_page/embed_app/card_images/1fd56cb41ccc4642e24b1b2e17fcf381" alt="purchverse" />
          <div className="publicize-info">
            <h1>Purchverse</h1>
            <p>More</p>
            <div className="login">
              <a 
                id="loginBtn" 
                role="button" 
                tabindex="0" 
                target="_blank" 
                className='embed-app-page-card-btn' 
                href="https://www.purchverse.com">
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