import ECommerceWrapper from '../../components/e-commerce-components/ECommerceWrapper';

import { ECommerceInfoProvider } from '../../contexts/e-commerce/ECommerceContext';

function ECommerceRoute() {
  return (
    <ECommerceInfoProvider>
      <ECommerceWrapper />
    </ECommerceInfoProvider>
  );
}

export default ECommerceRoute;
