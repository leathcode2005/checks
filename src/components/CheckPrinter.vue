<template>
    <div class="wrapper" id="wrapper" style="position: relative;">
        <div class="check-box" id="check-box">
            <div style="position: relative;" id="check-box-print">
                <div class="account-holder-name" style="position: absolute; top: 40px; left: 60px">{{check.accountHolderName}}</div>
                <div class="account-holder-address" style="position: absolute; top: 70px; left: 60px">
                    {{check.accountHolderAddress}}<br>
                    {{check.accountHolderCity}}, {{check.accountHolderState}} {{check.accountHolderZip}}
                </div>
                <div class="check-number-human" style="position: absolute; top: 40px; left: 1060px">{{check.checkNumber}}</div>
                <div class="date-data" style="position: absolute; top: 80px; left: 850px">{{check.date}}</div>
                <div class="date" style="position: absolute; top: 90px; left: 760px">Date: _____________________ </div>
                <div class="amount-box" style="position: absolute; top: 175px; left: 950px">

                </div>
                <div class="amount-data" style="position: absolute; top: 182px; left: 970px">{{ formattedAmount }}</div>
                <div class="pay-to-data" style="position: absolute; top: 180px; left: 180px">{{check.payTo}}</div>
                <div class="pay-to" style="position: absolute; top: 170px; left: 60px">
                    Pay to the <br>Order of <span class="payto-line"></span>
                </div>
                <div class="amount-line-data" ref="line" style="position: absolute; top: 240px; left: 100px">{{ writtenAmount }}</div>
                <div class="amount-line" style="position: absolute; top: 250px; left: 60px">
                    <span class="dollar-line"></span>
                </div>
                <div class="bank-name" style="position: absolute; top: 300px; left: 60px">{{check.bankName}}</div>
                <div class="memo-data" style="position: absolute; top: 367px; left: 120px">{{check.memo}}</div>
                <div class="memo" style="position: absolute; top: 390px; left: 60px">
                    Memo: ____________________________________
                </div>
                <div class="signature-data" style="position: absolute; top: 366px; left: 770px">{{check.signature}}</div>
                <div class="signature" style="position: absolute; top: 390px; left: 750px">
                    _________________________________________________
                </div>
                <div class="banking" style="position: absolute; top: 420px; left: 80px">
                    <div class="routing" style="display: inline;">
                        a{{check.routingNumber}}a
                    </div>
                    <div class="bank-account" style="display: inline;">{{check.bankAccountNumber}}c</div>
                    <div class="check-number" style="display: inline; margin-left:20px">{{check.checkNumber}}</div>
                </div>
            </div>
        </div>
        <div class="check-data" style="position: absolute; top: 450px">
            <div class="alert alert-primary" role="alert"><strong>Background does not print.</strong></div>
            <button type="button" style="float: right;" class="btn btn-primary" @click="printCheck">Print (Ctrl + P)</button>
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Account Holder Name</label>
                    <input type="email" class="form-control" id="inputEmail4" v-model="check.accountHolderName">
                </div>
                <div class="col-md-6">
                </div>
                <div class="col-md-4">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress" v-model="check.accountHolderAddress">
                </div>
                <div class="col-md-2">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" v-model="check.accountHolderCity">
                </div>
                <div class="col-md-2">
                    <label for="inputState" class="form-label">State</label>
                    <input type="text" class="form-control" v-model="check.accountHolderState">
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="text" class="form-control" v-model="check.accountHolderZip">
                </div>
            </form>
            <form class="row g-3" style="margin-top: 30px; border-top: 1px solid #e7e7e7;">
                <div class="col-md-2">
                    <label for="inputEmail4" class="form-label">Check Number</label>
                    <input type="email" class="form-control" id="inputEmail4" v-model="check.checkNumber">
                </div>
                <div class="col-md-4">
                    <label for="inputAddress" class="form-label">Bank Name</label>
                    <input type="text" class="form-control" id="inputAddress" v-model="check.bankName">
                </div>
                <div class="col-md-2">
                    <label for="inputCity" class="form-label">Routing #</label>
                    <input type="text" class="form-control" v-model="check.routingNumber">
                </div>
                <div class="col-md-2">
                    <label for="inputState" class="form-label">Account #</label>
                    <input type="text" class="form-control" v-model="check.bankAccountNumber">
                </div>
                <div class="col-md-6">
                    <label for="inputZip" class="form-label">Memo</label>
                    <input type="text" class="form-control" v-model="check.memo">
                </div>
            </form>
            <form class="row g-3" style="margin-top: 30px; border-top: 1px solid #e7e7e7;">
                <div class="col-md-2">
                    <label for="inputEmail4" class="form-label">Amount</label>
                    <input type="email" class="form-control" id="inputEmail4" v-model="check.amount">
                </div>
                <div class="col-md-6">
                    <label for="inputZip" class="form-label">Pay To</label>
                    <input type="text" class="form-control" v-model="check.payTo">
                </div>
                <div class="col-md-2">
                    <label for="inputEmail4" class="form-label">Date</label>
                    <input type="email" class="form-control" id="inputEmail4" v-model="check.date">
                </div>
                <div class="col-md-6">
                    <label for="inputZip" class="form-label">Signature</label>
                    <input type="text" class="form-control" v-model="check.signature">
                </div>
            </form>
            <div class="col-12" style="margin-top: 30px;">
                <button type="button" class="btn btn-primary" @click="saveToHistory">Save to History</button>
            </div>
            <form class="row g-3" style="margin-top: 30px; border-top: 1px solid #e7e7e7; padding-top: 15px;">
                <div class="col-md-2">
                    <label class="form-label">Number of Checks</label>
                    <input type="number" class="form-control" v-model.number="batchCount" min="1" max="500">
                </div>
                <div class="col-md-4" style="display: flex; align-items: flex-end;">
                    <button type="button" class="btn btn-success" @click="generateSequentialChecks">
                        Generate {{ batchCount }} Blank Check{{ batchCount === 1 ? '' : 's' }}
                    </button>
                </div>
                <div class="col-md-12">
                    <small class="text-muted">Generates blank checks starting at check #{{ check.checkNumber }}, saves them to history, and opens the print dialog.</small>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import print from 'print-js';
import { ToWords } from 'to-words';
import { ref, reactive, nextTick, watch, onMounted, onUnmounted, computed } from 'vue'
import { formatMoney } from '../utilities'
import { useAppStore, type CheckData } from '../stores/app'

const state = useAppStore()

const toWordsTool = new ToWords({
  localeCode: 'en-US',
  converterOptions: {
    currency: true,
    ignoreDecimal: false,
    ignoreZeroCurrency: false,
    doNotAddOnly: true,
  },
});

const toWords: (denom: number | string) => string = (denom) => {
    if (`${denom}`.trim() === '') {
        return ''
    }

    try {
        return toWordsTool.convert(Number(denom))
    } catch (e) {
        return `${e}`
    }
}

const formattedAmount = computed(() => formatMoney(check.amount))

const writtenAmount = computed(() => {
    const amountInWords = toWords(check.amount)

    return amountInWords ? `*** ${amountInWords} ***` : ''
})

function printCheck () {
    const style = document.createElement('style');
    style.textContent = `
      @media print {
        @page {
          margin: 0;
        }
        body {
          transform: scale(1);
          transform-origin: top center;
          width: 149%;
          margin: 0;
          padding: 0;
        }
        .wrapper > *:not(.check-box) {
          display: none !important;
        }
        .check-data {
            display: none;
        }
        .check-box {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0px;
          background-color: white;
          background: white !important;
          border: none !important;
          box-shadow: none !important;
        }
        .check-box-print {
          position: relative;
        }
        .amount-box {
          border: 1px solid black !important;
          print-color-adjust: exact;
          -webkit-print-color-adjust: exact;
        }
        .amount-box::before {
          color: black !important;
        }
        .payto-line {
          border-bottom: 1px solid black !important;
          border-right: 1px solid black !important;
          print-color-adjust: exact;
          -webkit-print-color-adjust: exact;
        }
        .dollar-line {
          border-bottom: 1px solid black !important;
          print-color-adjust: exact;
          -webkit-print-color-adjust: exact;
        }
        .memo {
          color: black !important;
        }
        .signature {
          color: black !important;
        }
      }
    `;
    document.head.appendChild(style);
    window.print();
    style.remove();
}

function saveToHistory () {
    let checkList = JSON.parse(localStorage.getItem('checkList') || '[]') as CheckData[]
    checkList.push({ ...check })
    localStorage.setItem('checkList', JSON.stringify(checkList))
}

function genNewCheck (): CheckData {
    let checkList = JSON.parse(localStorage.getItem('checkList') || '[]') as CheckData[]
    let recentCheck = checkList[checkList.length - 1]

    return {
        accountHolderName: recentCheck?.accountHolderName || 'John Smith',
        accountHolderAddress: recentCheck?.accountHolderAddress || '123 Cherry Tree Lane',
        accountHolderCity: recentCheck?.accountHolderCity || 'New York',
        accountHolderState: recentCheck?.accountHolderState || 'NY',
        accountHolderZip: recentCheck?.accountHolderZip || '10001',
        checkNumber: recentCheck?.checkNumber ? `${parseInt(recentCheck.checkNumber, 10) + 1}` : '100',
        date: new Date().toLocaleDateString(),
        bankName: recentCheck?.bankName || 'Bank Name, INC',
        amount: '0.00',
        payTo: 'Michael Johnson',
        memo: recentCheck?.memo || 'Rent',
        signature: recentCheck?.signature || 'John Smith',
        routingNumber: recentCheck?.routingNumber || '022303659',
        bankAccountNumber: recentCheck?.bankAccountNumber || '000000000000'
    }
}

const check = reactive<CheckData>(genNewCheck())

const batchCount = ref(1)

const line = ref<HTMLElement | null>(null)

watch(check, async () => {
    await nextTick(() => {
        let computedLine = line?.value?.clientWidth
        check.lineLength = computedLine
    })
}, { immediate: true })

function generateSequentialChecks () {
    const count = Math.max(1, Math.min(500, batchCount.value))
    const startNum = parseInt(check.checkNumber, 10) || 0
    const checkList = JSON.parse(localStorage.getItem('checkList') || '[]') as CheckData[]

    const batchChecks: CheckData[] = []
    for (let i = 0; i < count; i++) {
        batchChecks.push({
            accountHolderName: check.accountHolderName,
            accountHolderAddress: check.accountHolderAddress,
            accountHolderCity: check.accountHolderCity,
            accountHolderState: check.accountHolderState,
            accountHolderZip: check.accountHolderZip,
            checkNumber: `${startNum + i}`,
            date: '',
            bankName: check.bankName,
            amount: '',
            payTo: '',
            memo: '',
            signature: '',
            routingNumber: check.routingNumber,
            bankAccountNumber: check.bankAccountNumber
        })
    }

    checkList.push(...batchChecks)
    localStorage.setItem('checkList', JSON.stringify(checkList))

    // Build a hidden print container with all checks on separate pages
    const container = document.createElement('div')
    container.id = 'batch-print-container'

    for (const c of batchChecks) {
        const page = document.createElement('div')
        page.className = 'batch-check-page'
        page.innerHTML = `
            <div class="check-box" style="position:relative;">
                <div style="position:relative;">
                    <div class="account-holder-name" style="position:absolute;top:40px;left:60px">${c.accountHolderName}</div>
                    <div class="account-holder-address" style="position:absolute;top:70px;left:60px">
                        ${c.accountHolderAddress}<br>
                        ${c.accountHolderCity}, ${c.accountHolderState} ${c.accountHolderZip}
                    </div>
                    <div class="check-number-human" style="position:absolute;top:40px;left:1060px">${c.checkNumber}</div>
                    <div class="date-data" style="position:absolute;top:80px;left:850px"></div>
                    <div class="date" style="position:absolute;top:90px;left:760px">Date: _____________________</div>
                    <div class="amount-box" style="position:absolute;top:175px;left:950px"></div>
                    <div class="amount-data" style="position:absolute;top:182px;left:970px"></div>
                    <div class="pay-to-data" style="position:absolute;top:180px;left:180px"></div>
                    <div class="pay-to" style="position:absolute;top:170px;left:60px">
                        Pay to the <br>Order of <span class="payto-line"></span>
                    </div>
                    <div class="amount-line-data" style="position:absolute;top:240px;left:100px"></div>
                    <div class="amount-line" style="position:absolute;top:250px;left:60px">
                        <span class="dollar-line"></span>
                    </div>
                    <div class="bank-name" style="position:absolute;top:300px;left:60px">${c.bankName}</div>
                    <div class="memo-data" style="position:absolute;top:367px;left:120px"></div>
                    <div class="memo" style="position:absolute;top:390px;left:60px">
                        Memo: ____________________________________
                    </div>
                    <div class="signature-data" style="position:absolute;top:366px;left:770px"></div>
                    <div class="signature" style="position:absolute;top:390px;left:750px">
                        _________________________________________________
                    </div>
                    <div class="banking" style="position:absolute;top:420px;left:80px">
                        <div class="routing" style="display:inline;">a${c.routingNumber}a</div>
                        <div class="bank-account" style="display:inline;">${c.bankAccountNumber}c</div>
                        <div class="check-number" style="display:inline;margin-left:20px">${c.checkNumber}</div>
                    </div>
                </div>
            </div>
        `
        container.appendChild(page)
    }

    document.body.appendChild(container)

    const style = document.createElement('style')
    style.id = 'batch-print-style'
    style.textContent = `
      #batch-print-container { display: none; }
      @media print {
        body > *:not(#batch-print-container) { display: none !important; }
        #batch-print-container { display: block !important; }
        @page { margin: 0; }
        .batch-check-page {
          page-break-after: always;
          width: 100%;
          position: relative;
        }
        .batch-check-page:last-child { page-break-after: auto; }
        .batch-check-page .check-box {
          width: 100%;
          height: 100vh;
          margin: 0;
          padding: 0;
          background: white !important;
          border: none !important;
          box-shadow: none !important;
        }
        body {
          transform: scale(1);
          transform-origin: top center;
          width: 149%;
          margin: 0;
          padding: 0;
        }
      }
    `
    document.head.appendChild(style)
    window.print()
    style.remove()
    container.remove()

    // Advance check number past the batch
    check.checkNumber = `${startNum + count}`
}

function handlePrintShortcut(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'p') {
        event.preventDefault();
        printCheck();
    }
}

onMounted(() => {
    if (state.check) {
        check.accountHolderName = state.check.accountHolderName
        check.accountHolderAddress = state.check.accountHolderAddress
        check.accountHolderCity = state.check.accountHolderCity
        check.accountHolderState = state.check.accountHolderState
        check.accountHolderZip = state.check.accountHolderZip
        check.checkNumber = state.check.checkNumber
        check.date = state.check.date
        check.bankName = state.check.bankName
        check.amount = state.check.amount
        check.payTo = state.check.payTo
        check.memo = state.check.memo
        check.signature = state.check.signature
        check.routingNumber = state.check.routingNumber
        check.bankAccountNumber = state.check.bankAccountNumber
    }
    state.check = null

    window.addEventListener('keydown', handlePrintShortcut);
});

onUnmounted(() => {
    window.removeEventListener('keydown', handlePrintShortcut);
});

</script>

<style>

label {
    font-weight: bold;
}
.memo-data {
    font-family: Caveat;
    font-size: 30px;
    max-width: 350px;
    line-height: 0.65;
}
.signature-data {
    font-family: Caveat;
    font-size: 40px;
    transform: rotate(-2deg);
}
.amount-line-data {
    text-transform: capitalize;
}
.date-data, .pay-to-data, .amount-data{
    font-size: 20px;
    font-weight: bold;
}
.check-data {
    margin-top: 50px;
    padding: 50px 120px;
    border-top: 1px solid #e6e6e6;
}
.bank-name{
    font-size: 20px;
    font-weight: bold;
}
.account-holder-name {
    font-size: 20px;
    font-weight: bold;
}
.check-number-human {
    font-size: 20px;
    font-weight: bold;
}
.amount-box::before {
    content: "$";
    font-size: 20px;
    margin-left: -15px;
    font-weight: bold;
}
.amount-box {
    width: 225px;
    height: 40px;
    border: 1px solid black;
    background-color: white;
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
}
.check-box {
    width: 1200px;
    height: 1553px;
    border: 1px solid #e6e6e6;
    background-color: white;
    margin: 0 auto;
    background: url('../assets/checkbg.png');
    background-repeat: no-repeat;
    background-size: contain;
}

#check-box {
    width: 100%;
}

@font-face {
    font-family: 'banking';
    src: url('../assets/micrenc.ttf');
}


.banking {
    font-family: 'banking';
    font-size: 37px;
}
.dollar-line::after{
    content: "Dollars";
    font-size: 18px;
    position: absolute;
    right: -73px;
    top: 0;
}
.dollar-line {
    width: 840px;
    display: block;
    border-bottom: 1px solid black;
    margin-left: 10px;
    margin-top: 20px;
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
}
.payto-line {
    width: 776px;
    display: block;
    border-bottom: 1px solid black;
    margin-left: 73px;
    border-right: 1px solid black;
    height: 28px;
    margin-top: -32px;
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
}
</style>
