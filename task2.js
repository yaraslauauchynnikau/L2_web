



function KurwaBober(Address, Mask) {
    const zip = (arr1, arr2) => {
        return arr1.map((element, index) => [element, arr2[index]]);
    };
    
    let IP_octets = Address.split('.');
    let Mask_octets = Mask.split('.');

    let network_block = [];
    let host_identifier = [];

    for (let [ip_octet, mask_octet] of zip(IP_octets, Mask_octets)) {
        let octet = parseInt(ip_octet) & parseInt(mask_octet);
        network_block.push(octet.toString());
        host_identifier.push((ip_octet - octet).toString());
    }

    return [network_block.join('.'), host_identifier.join('.')];
}

console.log(KurwaBober("192.168.2.1", "255.255.255.0"));