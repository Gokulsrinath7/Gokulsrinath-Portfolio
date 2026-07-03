import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Send,
  RefreshCw,
  Play,
  CheckCircle,
  TrendingUp,
  Wallet,
  Terminal,
  History,
  DollarSign,
  Smartphone,
  Info,
  ShieldAlert,
  ArrowRightLeft,
  ChevronRight
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';

interface Transaction {
  id: string;
  timestamp: string;
  beneficiary: string;
  account: string;
  amount: number;
  status: 'Completed' | 'Pending' | 'Flagged';
  type: 'Transfer' | 'Deposit' | 'Utility';
}

interface RxJSLog {
  operator: string;
  message: string;
  timestamp: string;
  payload?: any;
}

const INITIAL_TRANSACTIONS: Transaction[] = [
  { id: 'TX-48920', timestamp: '01:04:10', beneficiary: 'City Union Bank Reserve', account: 'XXXX-9821', amount: 45000, status: 'Completed', type: 'Transfer' },
  { id: 'TX-48921', timestamp: '01:04:15', beneficiary: 'Johnathan Doe (Self)', account: 'XXXX-1240', amount: 1500, status: 'Completed', type: 'Transfer' },
  { id: 'TX-48922', timestamp: '01:04:22', beneficiary: 'Chennai Smart Grid (TNEB)', account: 'XXXX-5520', amount: 840, status: 'Completed', type: 'Utility' },
  { id: 'TX-48923', timestamp: '01:04:30', beneficiary: 'Central Bank Cash Deposit', account: 'XXXX-9821', amount: 12000, status: 'Completed', type: 'Deposit' },
  { id: 'TX-48924', timestamp: '01:04:45', beneficiary: 'Suresh Kumar - Vendor', account: 'XXXX-3341', amount: 8900, status: 'Completed', type: 'Transfer' }
];

const CHART_DATA = [
  { day: 'Mon', balance: 52000 },
  { day: 'Tue', balance: 50500 },
  { day: 'Wed', balance: 49660 },
  { day: 'Thu', balance: 61660 },
  { day: 'Fri', balance: 52760 },
  { day: 'Sat', balance: 55000 },
  { day: 'Sun', balance: 59800 }
];

export default function BankingShowcase() {
  const [activeTab, setActiveTab] = useState<'transfer' | 'streams' | 'analytics'>('transfer');
  
  // Fund Transfer Form State
  const [beneficiaryName, setBeneficiaryName] = useState('');
  const [beneficiaryAcc, setBeneficiaryAcc] = useState('');
  const [ifsc, setIfsc] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedBank, setSelectedBank] = useState('City Union Bank');
  const [transferStep, setTransferStep] = useState<'idle' | 'validating' | 'authorizing' | 'success'>('idle');
  const [transferProgress, setTransferProgress] = useState(0);
  const [transferError, setTransferError] = useState('');

  // Transactions State
  const [transactions, setTransactions] = useState<Transaction[]>(INITIAL_TRANSACTIONS);
  const [balance, setBalance] = useState(59800);
  const [chartData, setChartData] = useState(CHART_DATA);

  // RxJS Simulator State
  const [rxLogs, setRxLogs] = useState<RxJSLog[]>([]);
  const [isSimulatingRx, setIsSimulatingRx] = useState(false);
  const rxTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Clean up timers
  useEffect(() => {
    return () => {
      if (rxTimerRef.current) clearInterval(rxTimerRef.current);
    };
  }, []);

  // Form Validation and submission handler
  const handleTransferSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTransferError('');

    if (!beneficiaryName.trim()) {
      setTransferError('Please enter the Beneficiary Name.');
      return;
    }
    if (!beneficiaryAcc.trim() || beneficiaryAcc.length < 8) {
      setTransferError('Please enter a valid Account Number (min 8 digits).');
      return;
    }
    if (!ifsc.trim() || ifsc.length !== 11) {
      setTransferError('Please enter a valid 11-character IFSC Code.');
      return;
    }
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setTransferError('Please enter a valid transfer amount greater than 0.');
      return;
    }
    if (parsedAmount > balance) {
      setTransferError('Insufficient funds for this transaction.');
      return;
    }

    // Begin Transfer Pipeline Simulation (mimicking heavy front-end async middleware checks)
    setTransferStep('validating');
    setTransferProgress(10);

    const interval = setInterval(() => {
      setTransferProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 15;
      });
    }, 250);

    // Timeline of pipeline simulation
    setTimeout(() => {
      setTransferStep('authorizing');
    }, 800);

    setTimeout(() => {
      setTransferStep('success');
      // Update transaction list
      const txId = `TX-${Math.floor(10000 + Math.random() * 90000)}`;
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      
      const newTx: Transaction = {
        id: txId,
        timestamp: timeStr,
        beneficiary: beneficiaryName,
        account: `XXXX-${beneficiaryAcc.slice(-4)}`,
        amount: parsedAmount,
        status: 'Completed',
        type: 'Transfer'
      };

      setTransactions(prev => [newTx, ...prev]);
      setBalance(prev => prev - parsedAmount);
      
      // Update chart
      setChartData(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          ...updated[updated.length - 1],
          balance: balance - parsedAmount
        };
        return updated;
      });

    }, 2200);
  };

  const resetForm = () => {
    setBeneficiaryName('');
    setBeneficiaryAcc('');
    setIfsc('');
    setAmount('');
    setTransferStep('idle');
    setTransferProgress(0);
    setTransferError('');
  };

  // RxJS pipeline simulation logic (Perfect technical showcase)
  const runRxPipeline = () => {
    if (isSimulatingRx) return;
    setIsSimulatingRx(true);
    setRxLogs([]);

    const mockTransactionsToStream = [
      { id: 'S-701', amount: 250, beneficiary: 'Netflix subscription', account: 'CUB-921', risk: 'low' },
      { id: 'S-702', amount: 89000, beneficiary: 'Ganesh Dev - Brokerage', account: 'CBI-441', risk: 'high' },
      { id: 'S-703', amount: 450, beneficiary: 'Starbucks Coffee', account: 'TNS-120', risk: 'low' },
      { id: 'S-704', amount: 150000, beneficiary: 'Unknown Wire Transfer', account: 'SWFT-81', risk: 'critical' },
      { id: 'S-705', amount: 1200, beneficiary: 'Suresh Kirana Grocery', account: 'CUB-520', risk: 'low' }
    ];

    let index = 0;
    
    // Initializing stream subscription
    addRxLog('Observable.from(IncomingTransactionEvent)', 'Hot stream initialized, subscribing to source...', 'SUBSCRIBE');

    rxTimerRef.current = setInterval(() => {
      if (index >= mockTransactionsToStream.length) {
        addRxLog('complete()', 'Observable stream completed successfully.', 'STREAM_DONE');
        setIsSimulatingRx(false);
        if (rxTimerRef.current) clearInterval(rxTimerRef.current);
        return;
      }

      const tx = mockTransactionsToStream[index];
      const timeStr = new Date().toTimeString().split(' ')[0];

      // Step 1: tap() log entry
      addRxLog('tap(log)', `Intercepted Transaction Event: ${tx.id} for ₹${tx.amount}`, 'TAP', tx);

      // Step 2: filter() logic
      setTimeout(() => {
        const isHighValue = tx.amount > 5000;
        addRxLog(
          'filter(tx => tx.amount > 5000)',
          isHighValue 
            ? `✅ Transaction ${tx.id} is High Value (₹${tx.amount} > ₹5000). Forwarding pipeline.` 
            : `❌ Transaction ${tx.id} Filtered Out (₹${tx.amount} <= ₹5000). Blocked.`,
          'FILTER',
          { id: tx.id, forwarded: isHighValue }
        );

        if (isHighValue) {
          // Step 3: map() structure mapping
          setTimeout(() => {
            const mappedTx = {
              ...tx,
              securityValidated: true,
              timestamp: timeStr,
              securityScore: tx.risk === 'critical' ? 45 : 95
            };
            addRxLog(
              'map(tx => enrichWithSecurityToken(tx))',
              `Enriched transaction payload. Token generated. Safety: ${mappedTx.securityScore}%`,
              'MAP',
              mappedTx
            );

            // Step 4: subscription success / action trigger
            setTimeout(() => {
              if (mappedTx.securityScore < 50) {
                addRxLog(
                  'subscribe(tx => dispatchAlert(tx))',
                  `⚠️ RISK WARNING: High risk flag raised on ${mappedTx.id}! Dispatched secure notification.`,
                  'FLAGGED',
                  mappedTx
                );
              } else {
                addRxLog(
                  'subscribe(tx => commitToHistory(tx))',
                  `💳 Secure transaction logged. Rendered successfully. Balance adjusted.`,
                  'SUCCESS',
                  mappedTx
                );
              }
            }, 600);

          }, 600);
        }
      }, 600);

      index++;
    }, 2800);
  };

  const addRxLog = (operator: string, message: string, type: string, payload?: any) => {
    const timestamp = new Date().toTimeString().split(' ')[0];
    setRxLogs(prev => [...prev, { operator, message, timestamp, payload }]);
  };

  return (
    <section id="demo" className="py-20 bg-zinc-50 dark:bg-zinc-950/20 border-y border-zinc-200/50 dark:border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
            Interactive Showcase
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white mt-1.5">
            Simulated Banking Front-End Dashboard
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 mt-3 text-base">
            Interact with a mock banking single page application client. This module showcases the complex reactive validations, charts, and asynchronous pipelines Gokulsrinath implements for major banking portals.
          </p>
        </div>

        {/* Dashboard Frame Container */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-xl overflow-hidden max-w-6xl mx-auto flex flex-col min-h-[600px]">
          
          {/* Dashboard Header Bar */}
          <div className="border-b border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/80 px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <span className="font-sans font-bold text-base text-zinc-900 dark:text-white block">
                  CUB Portal Simulator
                </span>
                <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 block leading-none mt-0.5">
                  SECURE BROWSER NODE • ENG VERSION
                </span>
              </div>
            </div>

            {/* Dashboard Navigation Tabs */}
            <div className="flex bg-zinc-100 dark:bg-zinc-950 p-1 rounded-xl border border-zinc-200/40 dark:border-zinc-800/50 no-print">
              <button
                onClick={() => { setActiveTab('transfer'); resetForm(); }}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold tracking-tight rounded-lg transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'transfer'
                    ? 'bg-white dark:bg-zinc-800 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200'
                }`}
              >
                <ArrowRightLeft className="w-4 h-4" />
                <span>Fund Transfer</span>
              </button>
              <button
                onClick={() => setActiveTab('streams')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold tracking-tight rounded-lg transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'streams'
                    ? 'bg-white dark:bg-zinc-800 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200'
                }`}
              >
                <Terminal className="w-4 h-4" />
                <span>RxJS Stream Console</span>
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold tracking-tight rounded-lg transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'analytics'
                    ? 'bg-white dark:bg-zinc-800 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200'
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                <span>Analytics Grid</span>
              </button>
            </div>
          </div>

          {/* Micro Account Bar */}
          <div className="bg-zinc-100/50 dark:bg-zinc-950/40 px-6 py-3.5 flex items-center justify-between text-xs sm:text-sm border-b border-zinc-100 dark:border-zinc-850">
            <div className="flex items-center gap-2">
              <Wallet className="w-4 h-4 text-blue-500" />
              <span className="font-medium text-zinc-500 dark:text-zinc-400 font-mono">
                Active Account: <span className="font-bold text-zinc-900 dark:text-zinc-100">CUB-78201029</span>
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-mono">
              <span className="text-zinc-500 dark:text-zinc-400">Available Balance:</span>
              <span className="font-bold text-zinc-900 dark:text-zinc-100">
                ₹{balance.toLocaleString('en-IN')}.00
              </span>
            </div>
          </div>

          {/* Dashboard Tab Panels */}
          <div className="flex-1 p-6 lg:p-8">
            <AnimatePresence mode="wait">
              
              {/* Tab 1: Fund Transfer Form & Logs */}
              {activeTab === 'transfer' && (
                <motion.div
                  key="transfer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                >
                  {/* Left Column: Form */}
                  <div className="lg:col-span-7 bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800 rounded-2xl p-5 sm:p-6">
                    <h3 className="font-bold text-lg tracking-tight text-zinc-900 dark:text-white mb-5 flex items-center gap-2">
                      <Send className="w-4 h-4 text-blue-500" /> Direct NEFT/IMPS Transfer
                    </h3>

                    {transferStep === 'idle' && (
                      <form onSubmit={handleTransferSubmit} className="space-y-4">
                        {transferError && (
                          <div className="p-3.5 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400 text-xs rounded-xl flex items-center gap-2.5 font-sans">
                            <ShieldAlert className="w-4.5 h-4.5 shrink-0" />
                            <span>{transferError}</span>
                          </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[11px] font-bold font-mono text-zinc-400 uppercase tracking-widest block">
                              Select Clearing Bank
                            </label>
                            <select
                              value={selectedBank}
                              onChange={e => setSelectedBank(e.target.value)}
                              className="w-full text-sm font-semibold rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3.5 py-2.5 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              <option value="City Union Bank">City Union Bank</option>
                              <option value="Central Bank of India">Central Bank of India</option>
                              <option value="TNSC Bank">TNSC Bank</option>
                            </select>
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[11px] font-bold font-mono text-zinc-400 uppercase tracking-widest block">
                              Transfer Amount (₹)
                            </label>
                            <input
                              type="number"
                              placeholder="e.g. 5000"
                              value={amount}
                              onChange={e => setAmount(e.target.value)}
                              className="w-full text-sm font-semibold rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3.5 py-2.5 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold font-mono text-zinc-400 uppercase tracking-widest block">
                            Beneficiary Account Name
                          </label>
                          <input
                            type="text"
                            placeholder="Johnathan Doe"
                            value={beneficiaryName}
                            onChange={e => setBeneficiaryName(e.target.value)}
                            className="w-full text-sm font-semibold rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3.5 py-2.5 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[11px] font-bold font-mono text-zinc-400 uppercase tracking-widest block">
                              Account Number
                            </label>
                            <input
                              type="text"
                              maxLength={16}
                              placeholder="9281020019201"
                              value={beneficiaryAcc}
                              onChange={e => setBeneficiaryAcc(e.target.value.replace(/\D/g, ''))}
                              className="w-full text-sm font-semibold rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3.5 py-2.5 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[11px] font-bold font-mono text-zinc-400 uppercase tracking-widest block">
                              IFSC Code (11 alphanumeric)
                            </label>
                            <input
                              type="text"
                              maxLength={11}
                              placeholder="CIUB0000104"
                              value={ifsc}
                              onChange={e => setIfsc(e.target.value.toUpperCase())}
                              className="w-full text-sm font-semibold rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3.5 py-2.5 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-all duration-200 cursor-pointer shadow-md shadow-blue-500/15 flex items-center justify-center gap-2 mt-4"
                        >
                          <Send className="w-4 h-4" /> Submit Secured Transfer
                        </button>
                      </form>
                    )}

                    {/* Step Processing UI */}
                    {(transferStep === 'validating' || transferStep === 'authorizing') && (
                      <div className="py-12 flex flex-col items-center justify-center text-center space-y-5">
                        <div className="relative">
                          <RefreshCw className="w-12 h-12 text-blue-600 dark:text-blue-400 animate-spin" />
                          <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold font-mono">
                            {transferProgress}%
                          </span>
                        </div>
                        <div className="space-y-1.5 max-w-sm">
                          <h4 className="font-bold text-zinc-950 dark:text-white text-base">
                            {transferStep === 'validating' ? 'Encrypting Request Payload' : 'Authorizing Banking Handshake'}
                          </h4>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400">
                            {transferStep === 'validating' 
                              ? 'Initializing client handshake parameters. Standardizing JSON arrays & verifying checksum keys.' 
                              : 'Securing clearance token from clearing house. Connecting to backend REST proxy gateways.'}
                          </p>
                        </div>
                        <div className="w-48 bg-zinc-200 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-blue-600 h-full rounded-full transition-all duration-200" style={{ width: `${transferProgress}%` }} />
                        </div>
                      </div>
                    )}

                    {/* Success Screen UI */}
                    {transferStep === 'success' && (
                      <div className="py-8 flex flex-col items-center justify-center text-center space-y-5">
                        <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                          <CheckCircle className="w-10 h-10" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-bold text-zinc-950 dark:text-white text-lg">
                            Transfer Complete!
                          </h4>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            Amount of <span className="font-bold text-zinc-900 dark:text-zinc-100">₹{amount}.00</span> sent to {beneficiaryName}.
                          </p>
                          <p className="text-xs text-emerald-600 dark:text-emerald-400 font-mono mt-1 font-semibold">
                            RECEIPT TOK: OK_SECURE_CUB_{Math.floor(100000 + Math.random() * 900000)}
                          </p>
                        </div>

                        {/* Summary Receipt Grid */}
                        <div className="bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-850 p-4 rounded-xl text-left text-xs font-mono w-full max-w-sm space-y-2">
                          <div className="flex justify-between border-b border-zinc-50 dark:border-zinc-900 pb-1.5">
                            <span className="text-zinc-400">Target Bank:</span>
                            <span className="font-semibold text-zinc-700 dark:text-zinc-200">{selectedBank}</span>
                          </div>
                          <div className="flex justify-between border-b border-zinc-50 dark:border-zinc-900 pb-1.5">
                            <span className="text-zinc-400">Beneficiary A/C:</span>
                            <span className="font-semibold text-zinc-700 dark:text-zinc-200">XXXX-{beneficiaryAcc.slice(-4)}</span>
                          </div>
                          <div className="flex justify-between border-b border-zinc-50 dark:border-zinc-900 pb-1.5">
                            <span className="text-zinc-400">IFSC Code:</span>
                            <span className="font-semibold text-zinc-700 dark:text-zinc-200">{ifsc}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-zinc-400">Network:</span>
                            <span className="font-bold text-emerald-600 dark:text-emerald-400">IMPS SECURE</span>
                          </div>
                        </div>

                        <button
                          onClick={resetForm}
                          className="px-5 py-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 font-semibold rounded-xl text-xs transition-all cursor-pointer"
                        >
                          Make Another Transfer
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Mini Statement Feed */}
                  <div className="lg:col-span-5 space-y-5">
                    <div className="bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800 rounded-2xl p-5">
                      <h3 className="font-bold text-sm tracking-tight text-zinc-900 dark:text-white mb-4 flex items-center gap-1.5">
                        <History className="w-4.5 h-4.5 text-zinc-400" /> Recent Transactions
                      </h3>
                      
                      <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
                        {transactions.map(tx => (
                          <div key={tx.id} className="p-3 bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-850 rounded-xl flex justify-between items-center text-xs">
                            <div className="space-y-1 min-w-0">
                              <p className="font-bold text-zinc-900 dark:text-zinc-100 truncate pr-2">
                                {tx.beneficiary}
                              </p>
                              <p className="text-[10px] text-zinc-400 dark:text-zinc-500 font-mono flex items-center gap-1">
                                <span>{tx.id}</span>
                                <span>•</span>
                                <span>{tx.timestamp}</span>
                              </p>
                            </div>
                            <div className="text-right shrink-0">
                              <p className={`font-bold font-mono text-sm ${tx.type === 'Deposit' ? 'text-emerald-600' : 'text-zinc-900 dark:text-zinc-100'}`}>
                                {tx.type === 'Deposit' ? '+' : '-'}₹{tx.amount.toLocaleString('en-IN')}
                              </p>
                              <span className="text-[9px] font-mono font-semibold tracking-wider text-zinc-400 uppercase">
                                {tx.type}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Architectural Note Callout */}
                    <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100/60 dark:border-blue-900/40 text-xs text-blue-800 dark:text-blue-300 flex items-start gap-3">
                      <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Architectural Highlight</p>
                        <p className="text-blue-600 dark:text-blue-400 mt-1 leading-relaxed">
                          This Transfer pipeline demonstrates advanced client-side validation logic, state management synchronization, and loading-stage lifecycle events.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab 2: RxJS Streams Terminal */}
              {activeTab === 'streams' && (
                <motion.div
                  key="streams"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-5"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-850 p-4 rounded-xl">
                    <div className="space-y-1">
                      <h3 className="font-bold text-base tracking-tight text-zinc-950 dark:text-white flex items-center gap-2">
                        <Terminal className="w-5 h-5 text-indigo-500" /> Functional Reactive Pipeline
                      </h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        Visualizing live transaction events filtering, mapping, and side effects triggers using simulated RxJS Operators.
                      </p>
                    </div>

                    <button
                      onClick={runRxPipeline}
                      disabled={isSimulatingRx}
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-950 dark:disabled:text-indigo-400 text-white font-bold rounded-xl text-xs transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                    >
                      <Play className="w-4 h-4" /> {isSimulatingRx ? 'Streaming...' : 'Simulate RxJS Stream'}
                    </button>
                  </div>

                  {/* Terminal Block */}
                  <div className="bg-zinc-950 rounded-2xl border border-zinc-800 p-5 font-mono text-xs text-zinc-300 overflow-hidden flex flex-col min-h-[400px]">
                    
                    {/* Terminal Header */}
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4 shrink-0 text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                        <span className="ml-2">rx-stream-terminal.log</span>
                      </div>
                      <span>ONLINE • 250kbps</span>
                    </div>

                    {/* Terminal Body */}
                    <div className="flex-1 overflow-y-auto space-y-3.5 pr-2 max-h-[350px]">
                      {rxLogs.length === 0 ? (
                        <div className="h-48 flex flex-col items-center justify-center text-center text-zinc-600 text-xs">
                          <Terminal className="w-8 h-8 text-zinc-700 mb-2.5 animate-pulse" />
                          <p>Click "Simulate RxJS Stream" above to broadcast raw transaction events.</p>
                          <p className="text-[10px] text-zinc-800 mt-1">This simulation demonstrates hot observables, filtering criteria, and subscription mutations.</p>
                        </div>
                      ) : (
                        rxLogs.map((log, index) => (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2 }}
                            key={index}
                            className="space-y-1.5 border-l-2 border-zinc-800 pl-3 py-0.5"
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-zinc-500 text-[10px]">{log.timestamp}</span>
                              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider font-mono ${
                                log.operator.startsWith('tap') ? 'bg-zinc-800 text-zinc-400' :
                                log.operator.startsWith('filter') ? 'bg-blue-950 text-blue-400' :
                                log.operator.startsWith('map') ? 'bg-purple-950 text-purple-400' :
                                log.operator.startsWith('complete') ? 'bg-zinc-800 text-emerald-400 font-bold' :
                                log.operator.startsWith('Observable') ? 'bg-amber-950 text-amber-400' :
                                'bg-emerald-950 text-emerald-400'
                              }`}>
                                {log.operator}
                              </span>
                            </div>
                            <p className="text-zinc-300 text-[12px] leading-relaxed">{log.message}</p>
                            
                            {/* Render small parsed payload object if present */}
                            {log.payload && (
                              <pre className="text-[10px] bg-zinc-900/60 p-2 rounded border border-zinc-900 text-zinc-500 overflow-x-auto max-w-full">
                                {JSON.stringify(log.payload, null, 2)}
                              </pre>
                            )}
                          </motion.div>
                        ))
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab 3: Analytics Grid (Charts) */}
              {activeTab === 'analytics' && (
                <motion.div
                  key="analytics"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
                >
                  {/* Left Column: Recharts Chart */}
                  <div className="lg:col-span-8 bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800 rounded-2xl p-5 flex flex-col">
                    <h3 className="font-bold text-sm tracking-tight text-zinc-900 dark:text-white mb-4 flex items-center gap-1.5">
                      <TrendingUp className="w-4.5 h-4.5 text-blue-500" /> Account Net Worth Trend (Past week)
                    </h3>

                    <div className="flex-1 h-[260px] min-h-[240px] text-xs">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                          <defs>
                            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" className="dark:stroke-zinc-800/40" />
                          <XAxis dataKey="day" stroke="#94a3b8" />
                          <YAxis stroke="#94a3b8" />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: '#1f2937', 
                              borderColor: '#374151',
                              borderRadius: '8px',
                              color: '#fff',
                              fontFamily: 'monospace',
                              fontSize: '11px'
                            }} 
                          />
                          <Area type="monotone" dataKey="balance" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorBalance)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Right Column: Performance Stats */}
                  <div className="lg:col-span-4 flex flex-col justify-between gap-5">
                    <div className="bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800 rounded-2xl p-5 space-y-4">
                      <h4 className="font-bold text-xs font-mono uppercase tracking-widest text-zinc-400">
                        System Efficiency Indicators
                      </h4>
                      
                      <div className="space-y-3.5">
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs font-semibold">
                            <span className="text-zinc-500 dark:text-zinc-400">Bundle Chunk Size (Core)</span>
                            <span className="text-zinc-900 dark:text-zinc-100 font-mono font-bold">142 KB</span>
                          </div>
                          <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-emerald-500 h-full rounded-full" style={{ width: '35%' }} />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <div className="flex justify-between text-xs font-semibold">
                            <span className="text-zinc-500 dark:text-zinc-400">Avg API Handshake Speed</span>
                            <span className="text-zinc-900 dark:text-zinc-100 font-mono font-bold">180 ms</span>
                          </div>
                          <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-blue-500 h-full rounded-full" style={{ width: '22%' }} />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <div className="flex justify-between text-xs font-semibold">
                            <span className="text-zinc-500 dark:text-zinc-400">Memory Leak Score</span>
                            <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold">0.00%</span>
                          </div>
                          <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-emerald-500 h-full rounded-full" style={{ width: '0%' }} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-tr from-indigo-500/10 to-blue-500/10 border border-blue-100/40 dark:border-blue-900/40 rounded-2xl p-4.5 flex items-start gap-3">
                      <Smartphone className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5 animate-bounce" />
                      <div className="text-xs text-indigo-950 dark:text-zinc-200">
                        <p className="font-bold">Dynamic Mock Sandbox</p>
                        <p className="text-zinc-500 dark:text-zinc-400 mt-0.5 leading-relaxed">
                          Try submitting a fund transfer to see your balance reduce and transaction logs record instantly in real-time.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
