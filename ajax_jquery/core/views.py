from django.shortcuts import render
from .models import Student
from .forms import StudentForm
from django.views.generic import FormView
from django.views import View
from django.http import JsonResponse
# Create your views here.

def student_list_view(request):
    students = Student.objects.all().values()
    student_list = list(students)
    return JsonResponse({'data':student_list})

class StudentFormView(FormView):
    form_class = StudentForm
    template_name = "core/home.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["my_form"] = context["form"] # here context form is default
        return context

    def form_valid(self, form):
        id = self.request.POST.get('id')
        name = self.request.POST.get('name')
        roll = self.request.POST.get('roll')
        age = self.request.POST.get('age')

        if id == '':
            form.save()
        else:
            edited_data = Student(id=id, name=name, roll=roll, age=age)
            edited_data.save()

        return JsonResponse({'status':200})
    
    def form_invalid(self, form):
        errors = form.errors.as_json()
        return JsonResponse({'status':404, 'errors':errors}) 

# def save_data(request):
#     if request.method == 'POST':
#         form = StudentForm(request.POST)
#         if form.is_valid():
#             form.save()
#             return JsonResponse({"status":"saved"})
#         else:
#             return JsonResponse({"status":"not found"})


# for delete specific object 
def student_delete_view(request):
    if request.method == 'POST':
        id = request.POST.get('del_id')
        student_obj = Student.objects.get(pk=id)
        student_obj.delete()
        return JsonResponse({'success':True})
    return JsonResponse({'success':False})


# update specific object in Student model 
class StudentIdView(View):
    def post(self, request, *args, **kwargs):
        id = request.POST.get('id')
        print(id)
        if id is not None:
            student_obj = Student.objects.get(pk=id)

            # print('stud ', student_obj)
            # print(student_obj.name)
            # print(student_obj.id)
            # print(student_obj.roll)
            # print(student_obj.age)

            id = student_obj.pk
            name = student_obj.name
            roll = student_obj.roll
            age = student_obj.age

            context = {'id':id, 'name':name, 'roll':roll, 'age':age}
            return JsonResponse(context)
        else:
            context = {"status":False}
            return JsonResponse(context)
