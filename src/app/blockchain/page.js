'use client'
import React, { useState } from 'react'
import styles from './blockchain.module.scss'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { getBalance } from '../../services/axios_blockchain'

function BlockChain() {
    const [idA, setIdA] = useState('')
    const [idB, setIdB] = useState('')
    const [amount, setAmount] = useState(0)
    const [balanceA, setBalanceA] = useState("")
    const [balanceB, setBalanceB] = useState("")

    const [balanceAfterA, setBalanceAfterA] = useState("")
    const [balanceAfterB, setBalanceAfterB] = useState("")



    const handleTransfer = async () => {
        let rs = await fetch(`http://localhost:3002/transfer?id_a=${idA}&id_b=${idB}&amount=${amount}`)

        rs = await rs.json()
        console.log(rs);
        if (rs.errCode === 0) {
            setBalanceAfterA(rs.data.balanceA)
            setBalanceAfterB(rs.data.balanceB)
        }

    }

    const handleChangeIdA = async (value) => {
        console.log("idA: ", value);
        setIdA(value)
        let rs = await fetch(`http://localhost:3002/get-balance?idAccount=${value}`)

        rs = await rs.json()
        console.log(rs);
        if (rs.errCode === 0) {
            setBalanceA(rs.data)
        }

    }

    const handleChangeIdB = async (value) => {
        console.log("idA: ", value);
        setIdB(value)
        let rs = await fetch(`http://localhost:3002/get-balance?idAccount=${value}`)

        rs = await rs.json()
        console.log(rs);
        if (rs.errCode === 0) {
            setBalanceB(rs.data)
        }
    }

    const handleChangeAmount = async (value) => {
        setAmount(value)
    }

    const refreshBalanceA = async () => {
        let value = idA
        let rs = await fetch(`http://localhost:3002/get-balance?idAccount=${value}`)

        rs = await rs.json()
        console.log(rs);
        if (rs.errCode === 0) {
            setBalanceA(rs.data)
        }
    }

    const refreshBalanceB = async () => {
        let value = idB
        let rs = await fetch(`http://localhost:3002/get-balance?idAccount=${value}`)

        rs = await rs.json()
        console.log(rs);
        if (rs.errCode === 0) {
            setBalanceB(rs.data)
        }
    }


    return (
        <div className={styles.BlockChain}>
            <div className={styles.title}>Blockchain Trading</div>
            <div className={styles.BlockChain_top}>
                <div className={styles.item}>
                    <TextField value={idA} className={styles.input} id="outlined-basic1" label="ID Account 1" variant="outlined" onChange={(e) => handleChangeIdA(e.target.value)} />
                    {
                        balanceA && balanceA !== 0 &&
                        <div className={styles.balance}
                            onClick={refreshBalanceA}
                        >Balance: {balanceA && +balanceA !== 0 && balanceA}</div>
                    }
                </div>
                <div className={styles.item}>
                    <TextField value={idB} className={styles.input} id="outlined-basic2" label="ID Account 2" variant="outlined" onChange={(e) => handleChangeIdB(e.target.value)} />
                    {
                        balanceB && balanceB !== 0 &&
                        <div className={styles.balance}
                            onClick={refreshBalanceB}
                        >Balance: {balanceB && +balanceB !== 0 && balanceB}</div>
                    }
                </div>
            </div>
            <div className={styles.center}>
                <div className={styles.item}>
                    <TextField className={styles.input} id="outlined-basic1" label="Amount" variant="outlined" type="number" onChange={(e) => handleChangeAmount(e.target.value)} />
                    <div className={styles.balance}>Message: </div>
                </div>
                <div className={styles.item}>
                    <Button variant="contained" onClick={handleTransfer}>Transfer</Button>
                    <div className={styles.balance}>Message result: </div>
                </div>
            </div>
            {
                balanceAfterB && balanceAfterA &&
                <div className={styles.result}>
                    <div className={styles.title}>Result</div>
                    <div className={styles.result_content}>
                        <div> <b>Balance Account 1</b> </div>
                        <ul>
                            <li>Before: {balanceA}</li>
                            <li>After: {balanceAfterA}</li>
                        </ul>
                        <div><b>Balance Account 2</b></div>
                        <ul>
                            <li>Before: {balanceB}</li>
                            <li>After: {balanceAfterB}</li>
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}

export default BlockChain