#include <eosiolib/eosio.hpp>
#include <eosiolib/print.hpp>

using eosio::name;
using std::string;
using namespace std;

class supplychain : public eosio::contract
{
public:
  supplychain(account_name self) : eosio::contract(self)
  {
  }

  // @abi
  void initiate(
      const account_name supplier,
      vector<string> products,
      const account_name buyer,
      const uint64_t timestamp);
};
