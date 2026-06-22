function isApproved(creditScore){
    if (creditScore >= 620){
    return true
    } else {
    return false
}
}

function loanDecision(creditScore){
    if (creditScore >= 620){
        return "Approved"
    } else {
        return "Denied"
    }
}

function ltvRiskLevel(ltv){
     if (ltv > 95){
     return "High Risk";
    } else if (ltv >= 80){
     return "Medium Risk";
    } else  {
     return "Low Risk";
}
}








