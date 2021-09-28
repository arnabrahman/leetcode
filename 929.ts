function numUniqueEmails(emails: string[]): number {
    let emailMap = new Map()
    for (let i = 0; i < emails.length; i++) {
        let formatedEmail = ''
        let foundAt = false
        let foundPlus = false
        for (let j = 0; j < emails[i].length; j++) {
            if (emails[i][j] === '@') foundAt = true
            if (emails[i][j] === '+') foundPlus = true
            if (!foundAt && (emails[i][j] === '.' || foundPlus)) continue
            formatedEmail += emails[i][j]
        }
        if (!emailMap.has(formatedEmail)) emailMap.set(formatedEmail, 1)
    }
    return emailMap.size

};