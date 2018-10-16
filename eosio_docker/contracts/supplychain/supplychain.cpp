#include "supplychain.hpp"
using namespace eosio;
using namespace std;

// @bi action initiate
void supplychain::initiate(const account_name supplier,
                           vector<string> products,
                           const account_name buyer,
                           const uint64_t timestamp)
{
  // Check if authorized
  require_auth(supplier);

  // Validation check
  eosio_assert(products.size() > 0, "Can not send a blank Invoice.");

  // check if buyer exists
  if (is_account(buyer))
  {
    require_recipient(buyer);
    print(name{buyer}, " Found", "\n");
  }
  else
  {
    print(name{buyer}, " Not Found", "\n");
  }

  for (int i = 0; i < products.size(); it++)
  {
    print(products[i]);
  }
}

EOSIO_ABI(supplychain, (initiate))
