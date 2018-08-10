#!/usr/bin/env python3

import cgi
import cgitb
import json

cgitb.enable()

form = cgi.FieldStorage()
testInput = form.getfirst("testInput")

print("Content-type: application/json")
print()
response = {
    'testData': testInput[::-1]
}
print(json.JSONEncoder().encode(response))
