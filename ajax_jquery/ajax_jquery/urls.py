"""ajax_jquery URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from core import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.StudentFormView.as_view(), name="home"),
    path('student_list/', views.student_list_view, name="student_list"),
    path('del_obj/', views.student_delete_view, name='student_delete_view'),
    path('student_id', views.StudentIdView.as_view(), name='student_id_view')
    # path('save_data/', views.save_data, name='save_data'),
]
