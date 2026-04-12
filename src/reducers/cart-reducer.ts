import type { Guitar } from "../types";

export type CartActions = 
{type: 'add-to-cart', payload:  {item:Guitar}} |
{type: 'remove-from-cart', payload:  {item:Guitar}} |
{type: 'decrease-quantity', payload:  {item:Guitar}} |
{type: 'increase-quantity', payload:  {item:Guitar}} |
{type: 'clear-cart'} 