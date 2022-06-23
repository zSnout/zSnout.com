import re
from random import randint
from time import sleep

# Four uses of story.ask():
  # ask(question,option 1,option 2,...) returns the key of the option selected.
  # ask(question,list of options) returns the key of the option selected.
  # ask(question) returns True or False based on whether the user selected Yes or No.
  # ask(question,answer as str) returns True or False based on whether user's answer == answer given to function.

class story:
  @staticmethod
  def removeIndent(text):
    text = text.split("\n")

    i = None
    for line in text:
      if line == "":
        continue
      spaces = len(re.findall(r"^ *",line)[0])
      if i is None:
        i = spaces
      else:
        i = min([i,spaces])
    if i is None:
      i = 0

    for j in range(0,len(text)):
      text[j] = text[j][i:]

    return "\n".join(text)
  @staticmethod
  def number(text):
    try:
      float(text)
    except:
      return False

    return float(text)
  @staticmethod
  def ask(question = "",*answers):
    answers = list(answers)
    if len(answers) == 0: # For ask(question)
      answers = ["Yes","No"]
      print("")
      print(question)
      while True:
        a = input("  Enter Yes or No:")
        if a.lower() == "yes":
          return True
        elif a.lower() == "no":
          return False
    elif len(answers) == 1:
      if type(answers[0]) is list: # For ask(question,list of options)
        answers = answers[0]
      elif type(answers[0]) is str: # For ask(question,answer as str)
        print("")
        print(question)
        a = input("  Answer:")
        b = answers[0]
        if a.lower() == b.lower():
          return True
        else:
          return False
    print("")
    print(question)
    for z in range(0,len(answers)):
      print("  %s: %s" %(z,answers[z]))
    boolean = True
    while boolean:
      answer = input("    Enter a key:")
      try:
        int(answer,10)
      except:
        continue
      intAnswer = int(answer,10)
      if 0 <= intAnswer and intAnswer < len(answers):
        return intAnswer
  @staticmethod
  def asknumber(question = ""):
    print(" ")
    print(question)

    def ite():
      a = input("  Enter a number:")
      try:
        float(a)
      except:
        return ite()

      if str(float(a)) == "nan":
        return ite()

      a = float(a)
      if float(int(a)) == float(a):
        return int(a)
      else:
        return float(a)

    return ite()
  @staticmethod
  def askinput(question = ""):
    print(" ")
    print(question)

    def ite():
      a = input("  Enter some text:")
      if a == "":
        return ite()

      return a

    return ite()

  def __init__(self,text,settings = dict()):
    text = text.replace("\r\n","\n").replace("\r","\n").replace("\t","  ")

    globalvars = dict()
    variables = dict()
    states = dict()

    regex = r"(?:^(@global|) *\$([A-Za-z0-9_]+) *= *(.+)$)|(?:^([A-Za-z0-9_]+)$\n(( +).+$(?:\n^\6 *.+$)*))"
    parsed = re.findall(regex,text,re.M)
    for item in parsed:
      if item[1] != "":
        if item[0] == "@global":
          globalvars[item[1]] = item[2]
        elif item[1] in globalvars.keys():
          globalvars[item[1]] = item[2]
        else:
          variables[item[1]] = item[2]
      elif item[3] != "":
        states[item[3]] = story.removeIndent(item[4])

    for i in variables.keys():
      if i in settings:
        variables[i] = settings[i]
    for i in globalvars.keys():
      if i in settings:
        globalvars[i] = settings[i]

    self.globalVars = globalvars.copy()
    self.localVars = variables.copy()
    self.runfrom = "start"
    self.reference = "start"
    self.state = "start"
    self.states = states.copy()
    self.source = {
      "globalVars": globalvars.copy(),
      "localVars": variables.copy(),
      "text": text
    }
  def newContext(self,runfrom = "start",state = "start"):
    new = story(self.source["text"])
    new.localVars = self.source["localVars"].copy()
    new.globalVars = self.globalVars
    new.runfrom = runfrom
    new.state = state
    return new

  def text(self,text):
    variables = self.globalVars.copy()
    variables.update(self.localVars)

    if len(text) >= 1 and text[0:1] == " ":
      return text
    else:
      text = text.replace("{@runfrom}",self.runfrom)
      text = text.replace("@runfrom",self.runfrom)
      text = text.replace("{@reference}",self.reference)
      text = text.replace("@reference",self.reference)

      for var in variables.keys():
        text = text.replace("{$" + var + "}",variables[var])
        text = text.replace("$" + var,variables[var])

      return text

  def runState(self,state):
    if state in self.states.keys():
      return self.run(self.states[state])
  def run(self,code = None):
    if code is None:
      return self.runState(self.state)
    source = code
    def others(x):
      if len(code.split("\n")) > x:
        other = []
        other.extend(code.split("\n")[x:])
        return "\n".join(other)
      else:
        return None
    line = code.split("\n")[0]
    rest = others(1)
    ret = None

    ifblock = re.match(r"(@if +(.+)((?:\n +.+)+)((?:\n@elseif +.+(?:\n +.+)+)*(?:\n@else(?:\n +.+)+)?))",source)
    menublock = re.match(r"(@menu( +.+)?(?:\n( +)[^ \n\r].*(?:\n\3 +.*)+)+)",source)
    contextblock = re.match(r"(@context((?:\n +.*)+))",source)
    repeatblock = re.match(r"(@repeat +([1-9][0-9]?)((?:\n +.*)+))",source)
    whileblock = re.match(r"(@(do|)while +(.+)((?:\n +.*)+))",source)
    forblock = re.match(r"(@for +(.*?) *; *(.*?) *; *(.*?) *((?:\n +.*)+))",source)

    if line == "" or line == "@base" or line == "@pass":
      pass
    elif line == "@break":
      return "BREAK"
    elif line == "@continue":
      return "CONTINUE"
    elif line[0:1] == " ":
      input(line.lstrip(" "))
    elif len(line) > 8 and line[0:8] == "@nowait ":
      if line[8:9] == " ":
        print(line[9:])
      else:
        print(self.text(line[8:]))
    elif line == "@stop" or line == "@exit context":
      return "STOP"
    elif line == "@kill" or line == "@exit story":
      return "KILL"
    elif re.match(r"^\$([A-Za-z0-9_]+) *= *@(input|number)(?: +(.+))?$",line):
      ret = self.runVarInput(line)
    elif re.match(r"^\$([A-Za-z0-9_]+) *= *@random +([1-9][0-9]{0,5}) *, *([1-9][0-9]{0,5})$",line,re.M):
      ret = self.runVarRand(line)
    elif re.match(r"^\$[A-Za-z0-9_]+ *(?:[-+*/.]|)= *.+$",line,re.M):
      ret = self.runVarChange(line)
    elif re.match(r"^\$([A-Za-z0-9_]+) *(\+\+|--)$",line,re.M):
      ret = self.runVarChange(line)
    elif re.match(r"^@(?:sleep|wait|timeout) +(10|[1-9]|[0-9]?\.[1-9]|[0-9]?\.[0-9][1-9])$",line,re.M):
      ret = self.runSleep(line)
    elif contextblock:
      contextlength = len(contextblock.group(1).split("\n"))
      rest = others(contextlength)
      contextblock = contextblock.group(1)
      ret = self.runContextBlock(contextblock)
    elif repeatblock:
      repeatlength = len(repeatblock.group(1).split("\n"))
      rest = others(repeatlength)
      repeatblock = repeatblock.group(1)
      ret = self.runRepeatBlock(repeatblock)
    elif whileblock:
      whilelength = len(whileblock.group(1).split("\n"))
      rest = others(whilelength)
      whileblock = whileblock.group(1)
      ret = self.runWhileBlock(whileblock)
    elif ifblock:
      iflength = len(ifblock.group(1).split("\n"))
      rest = others(iflength)
      ifblock = ifblock.group(1)
      ret = self.runIfBlock(ifblock)
    elif forblock:
      forlength = len(forblock.group(1).split("\n"))
      rest = others(forlength)
      forblock = forblock.group(1)
      ret = self.runForBlock(forblock)
    elif menublock:
      menulength = len(menublock.group(1).split("\n"))
      rest = others(menulength)
      menublock = menublock.group(1)
      ret = self.runMenuBlock(menublock)
    elif re.match(r"^@run *[A-Za-z0-9_]+$",line,re.M):
      ret = self.runRun(line)
    elif re.match(r"^@goto *[A-Za-z0-9_]+$",line,re.M):
      ret = self.runGoto(line)
    else:
      input(self.text(line))

    if rest is not None:
      ret = self.run(rest)
      return ret
    else:
      return ret

  def runSleep(self,code):
    regex = r"^@(?:sleep|wait|timeout) +(10|[1-9]|[0-9]?\.[1-9]|[0-9]?\.[0-9][1-9])$"
    match = re.match(regex,code)
    if match:
      sleep(float(match.group(1)))

    return False
  def runVarChange(self,code):
    regex = r"^\$([A-Za-z0-9_]+) *([-+*/.]|)= *(.+)$"
    match = re.findall(regex,code)
    if len(match) == 1:
      match = match[0]
      var = match[0]
      oper = match[1]
      val = self.text(match[2])

      if self.varExists(var) is False:
        if oper == "":
          self.localVars[var] = val
          return True
        else:
          return False

      if oper == ".":
        val = str(self.getVariable(var)) + str(val)

      if oper == "." or oper == "":
        if var in self.localVars.keys():
          self.localVars[var] = str(val)
          return True
        elif var in self.globalVars.keys():
          self.globalVars[var] = str(val)
          return True
        else:
          return False

      if oper != "":
        numvar = story.number(self.getVariable(var))
        numval = story.number(val)
        if numvar is False or numval is False:
          return False

        if oper == "+":
          val = numvar + numval
        elif oper == "-":
          val = numvar - numval
        elif oper == "*":
          val = numvar * numval
        elif oper == "/":
          val = numvar / numval

        if float(int(val)) == float(val):
          val = str(int(val))

      if var in self.localVars.keys():
        self.localVars[var] = str(val)
        return True
      elif var in self.globalVars.keys():
        self.globalVars[var] = str(val)
        return True
    else:
      regex = r"^\$([A-Za-z0-9_]+) *(\+\+|--)$"
      match = re.findall(regex,code)
      if len(match) == 1:
        match = match[0]
        var = match[0]
        oper = match[1]
        if oper == "++":
          return self.runVarChange("$" + var + " += 1")
        elif oper == "--":
          return self.runVarChange("$" + var + " -= 1")

    return False
  def runVarInput(self,code):
    match = re.findall(r"^\$([A-Za-z0-9_]+) *= *@(input|number)(?: +(.+))?$",code)
    if len(match) >= 1:
      match = match[0]

      var = match[0]
      tpe = match[1]
      a = ""

      q = match[2]
      if q is None:
        q = ""
      if q == "":
        q = "Set $" + var

      if tpe == "input":
        a = str(self.askinput(q))
      elif tpe == "number":
        a = str(self.asknumber(q))

      if self.varExists(var):
        self.setVariable(var,a)
      else:
        self.localVars[var] = a

      print(" ")
      return True
    return False
  def runVarRand(self,code):
    match = re.match(r"^\$([A-Za-z0-9_]+) *= *@random +([1-9][0-9]{0,5}) *, *([1-9][0-9]{0,5})$",code)
    if match:
      var = match.group(1)
      rmin = int(match.group(2))
      rmax = int(match.group(3))
      rand = randint(rmin,rmax)

      if self.varExists(var):
        self.setVariable(var,str(rand))
      else:
        self.localVars[var] = str(rand)
  def runIfBlock(self,code):
    regex = r"@if +(.+)((?:\n +.+)+)((?:\n@elseif +.+(?:\n +.+)+)*(?:\n@else(?:\n +.+)+)?)"
    match = re.findall(regex,code,re.M)
    if len(match) >= 1:
      match = match[0]

      condition = match[0]
      code = match[1]
      try:
        other = match[2]
      except:
        other = ""

      if self.test(condition):
        return self.run(story.removeIndent(code[1:]))
      elif other == "":
        return False
      elif other[0:7] == "\n@else\n":
        return self.run(story.removeIndent(other[7:]))
      elif other[0:9] == "\n@elseif ":
        return self.runIfBlock("@if " + other[9:])

    return False
  def runMenuBlock(self,code):
    regex = r"(@menu(?: (.+))?(?:\n( +)[^ \n\r].*(?:\n\3 +.*)+)+)"
    subex = r"(?:^([^ \n\r].*)$((?:\n^ +.*$)+))+"

    match = re.findall(regex,code)
    if len(match) >= 1:
      match = match[0]

      question = match[1]
      if question == "" or question is None:
        question = ""
      else:
        question = self.text(question)
      other = story.removeIndent("\n".join(match[0].split("\n")[1:]))

      items = re.findall(subex,other,re.M)
      options = list()
      codes = list()
      for i in items:
        options.append(self.text(i[0]))
        codes.append(story.removeIndent(i[1][1:]))

      i = story.ask(question,options)
      print(" ")
      return self.run(codes[i])
    return False
  def runContextBlock(self,code):
    regex = r"(@context((?:\n +.*)+))"

    match = re.match(regex,code)
    if match:
      ctx = self.newContext()
      ret = ctx.run(story.removeIndent(match.group(2)[1:]))
      if ret == "KILL":
        return "KILL"
      else:
        return False
    return False
  def runRepeatBlock(self,code):
    regex = r"(@repeat +([1-9][0-9]?)((?:\n +.*)+))"

    match = re.match(regex,code)
    if match:
      ret = ""
      code = story.removeIndent(match.group(3)[1:])

      for i in range(0,int(match.group(2))):
        if ret == "STOP" or ret == "KILL":
          return ret

        ret = self.run(code)

      if ret == "STOP" or ret == "KILL":
        return ret
      else:
        return False
    return False
  def runWhileBlock(self,code):
    regex = r"(@(do|)while +(.+)((?:\n +.*)+))"

    match = re.match(regex,code)
    if match:
      ret = ""
      cond = match.group(3)
      code = story.removeIndent(match.group(4)[1:])

      do = match.group(2)
      if do == "do":
        do = True
      else:
        do = False

      if do:
        ret = self.run(code)
      while self.test(cond):
        if ret == "STOP" or ret == "KILL":
          return ret

        ret = self.run(code)

      if ret == "STOP" or ret == "KILL":
        return ret
      else:
        return False
    return False
  def runForBlock(self,code):
    regex = r"(@for +(.*?) *; *(.*?) *; *(.*?) *((?:\n +.*)+))"

    match = re.match(regex,code)
    if match:
      ret = ""
      start = match.group(2)
      cond = match.group(3)
      inc = match.group(4)
      code = story.removeIndent(match.group(5)[1:])

      if start:
        self.runVarChange(start.strip())

      boo = True
      if cond:
        boo = self.test(cond.strip())
      while boo:
        if ret == "STOP" or ret == "KILL":
          return ret

        ret = self.run(code)
        if inc:
          self.runVarChange(inc.strip())

        boo = self.test(cond.strip())

      if ret == "STOP" or ret == "KILL":
        return ret
      else:
        return False
    return False
  def runRun(self,code):
    match = re.findall("^@run *([A-Za-z0-9_]+)$",code,re.M)
    if len(match) >= 1:
      return self.runState(match[0])
    else:
      return False
  def runGoto(self,code):
    match = re.findall("^@goto *([A-Za-z0-9_]+)$",code,re.M)
    if len(match) >= 1:
      self.runState(match[0])
      return "STOP"
    else:
      return "STOP"

  def varExists(self,var):
    if var in self.localVars.keys():
      return True
    elif var in self.globalVars.keys():
      return True
    else:
      return False
  def getVariable(self,var):
    if var in self.localVars.keys():
      return self.localVars[var]
    elif var in self.globalVars.keys():
      return self.globalVars[var]
    else:
      return False
  def setVariable(self,var,val = None):
    if var in self.localVars.keys():
      self.localVars[var] = str(val)
    elif var in self.globalVars.keys():
      self.globalVars[var] = str(val)
    else:
      self.localVars[var] = str(val)

  def simpleCondition(self,condition):
    variables = self.globalVars.copy()
    variables.update(self.localVars)

    match = re.findall(r"^ *\$([A-Za-z0-9_]+) *(<=|>=|<|>|!=|=) *(.+) *$",condition)
    if len(match) == 1:
      if not (match[0][0] in variables):
        return False

      match = match[0]
      var = variables[match[0]]
      varnum = story.number(var)
      oper = match[1]
      val = self.text(match[2])
      num = story.number(val)

      if oper == "<" or oper == ">" or oper == "<=" or oper == ">=":
        if num is False or varnum is False:
          return False

      if oper == "<" and varnum < num:
        return True
      elif oper == ">" and varnum > num:
        return True
      elif oper == "<=" and varnum <= num:
        return True
      elif oper == ">=" and varnum >= num:
        return True

      if oper == "=" and var == val:
        return True
      elif oper == "!=" and var != val:
        return True

      return False

    match = re.findall(r"^ *@(runfrom|reference) *(!=|=) *(.+) *$",condition)
    if len(match) == 1:
      match = match[0]

      if match[0] == "runfrom":
        var = self.runfrom
      elif match[0] == "reference":
        var = self.reference
      else:
        return False
      oper = match[1]
      val = match[2]

      if oper == "=" and var == val:
        return True
      elif oper == "!=" and var != val:
        return True

      return False

    return False
  def test(self,condition):
    ors = condition.split(" or ")
    o = False
    for c in ors:
      c = c.strip()

      ands = c.split(" and ")
      b = True
      for a in ands:
        a = a.strip()
        if a[0:4] == "not ":
          a = a[4:]
          b = b and (not self.simpleCondition(a))
        else:
          b = b and self.simpleCondition(a)

      o = o or b

    return o